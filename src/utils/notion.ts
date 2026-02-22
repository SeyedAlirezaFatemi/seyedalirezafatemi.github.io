import fs from 'node:fs';
import path from 'node:path';
import { n2m, queryDatabase } from '@/components/Notion/client';
import type { BlogPost, NotionBlogDto } from '@/features/blog/@types';

const COVERS_DIR = path.join(process.cwd(), 'public', 'blog-covers');

async function downloadCoverImage(
  url: string,
  slug: string
): Promise<string | null> {
  try {
    const ext = new URL(url).pathname.split('.').pop() ?? 'png';
    const filename = `${slug}.${ext}`;
    const filePath = path.join(COVERS_DIR, filename);

    fs.mkdirSync(COVERS_DIR, { recursive: true });

    const response = await fetch(url);
    if (!response.ok) return null;

    const buffer = Buffer.from(await response.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    return `/blog-covers/${filename}`;
  } catch {
    return null;
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const databaseId = process.env.BLOG_DATABASE_ID as string;
  const response = await queryDatabase(databaseId, {
    filter: {
      property: 'published',
      checkbox: {
        equals: true,
      },
    },
  });

  const posts = (response.results as NotionBlogDto[])
    .map((page) => ({
      title: page.properties.title.title[0].text.content,
      date: page.properties.date.date.start,
      created: page.properties.created.created_time,
      updated: page.properties.updated.last_edited_time,
      authors: page.properties.author?.people?.map((it) => it.object) ?? [],
      description: page.properties.summary?.rich_text?.[0]?.text?.content ?? '',
      slug: page.properties.slug.formula.string,
      published: page.properties.published.checkbox.valueOf(),
      tags: page.properties.tags.multi_select.map((tag) => tag.name),
      notionCoverUrl: page.cover?.file?.url ?? null,
    }))
    .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());

  const postsWithCovers = await Promise.all(
    posts.map(async ({ notionCoverUrl, ...post }) => ({
      ...post,
      cover: notionCoverUrl
        ? await downloadCoverImage(notionCoverUrl, post.slug)
        : null,
    }))
  );

  return postsWithCovers;
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  const databaseId = process.env.BLOG_DATABASE_ID as string;
  const response = await queryDatabase(databaseId, {
    filter: {
      property: 'slug',
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });

  const page = response.results[0] as NotionBlogDto;

  const pageMarkdown = await n2m.pageToMarkdown(page.id);

  const content = n2m.toMarkdownString(pageMarkdown).parent;

  const notionCoverUrl = page.cover?.file?.url ?? null;
  const postSlug = page.properties.slug.formula.string;
  const cover = notionCoverUrl
    ? await downloadCoverImage(notionCoverUrl, postSlug)
    : null;

  return {
    title: page.properties.title.title[0].text.content,
    date: page.properties.date.date.start,
    created: page.properties.created.created_time,
    updated: page.properties.updated.last_edited_time,
    authors: page.properties.author?.people?.map((it) => it.object) ?? [],
    description: page.properties.summary?.rich_text?.[0]?.text?.content ?? '',
    slug: postSlug,
    published: page.properties.published.checkbox.valueOf(),
    content,
    cover,
    tags: page.properties.tags.multi_select.map((tag) => tag.name),
  };
}
