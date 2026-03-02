import { n2m, queryDatabase } from '@/components/Notion/client';
import type { BlogPost, NotionBlogDto } from '@/features/blog/@types';

function coverProxyUrl(pageId: string, lastEditedTime: string) {
  return `/notion-image/page/${pageId}/${encodeURIComponent(lastEditedTime)}`;
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
      cover:
        page.cover?.type === 'file'
          ? coverProxyUrl(page.id, page.last_edited_time)
          : (page.cover?.external?.url ?? null),
    }))
    .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());

  return posts;
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

  const cover =
    page.cover?.type === 'file'
      ? coverProxyUrl(page.id, page.last_edited_time)
      : (page.cover?.external?.url ?? null);
  const postSlug = page.properties.slug.formula.string;

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
