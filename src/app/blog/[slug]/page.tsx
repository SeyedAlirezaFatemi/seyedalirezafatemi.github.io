import React from 'react';
import ReactMarkdown from 'react-markdown';
import type { Metadata } from 'next';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeRaw from 'rehype-raw';
import { getBlogPost, getBlogPosts } from '@/utils/notion';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

const fetchBlogPostData = async (slug: string) => {
  const blogPost = await getBlogPost(slug);

  return {
    blogPost,
  };
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blogPost = await getBlogPost(slug);
  return {
    title: blogPost.title,
    description: blogPost.description,
    openGraph: {
      title: blogPost.title,
      description: blogPost.description,
      ...(blogPost.cover
        ? {
            images: [
              {
                url: blogPost.cover,
                width: 600,
                height: 400,
                alt: blogPost.title,
              },
            ],
          }
        : {}),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const { blogPost } = await fetchBlogPostData(slug);

  if (!blogPost) {
    return notFound();
  }

  return (
    <article className="container mx-auto">
      {blogPost.cover && (
        <Image
          width={600}
          height={400}
          src={blogPost.cover}
          alt={blogPost.title}
          className="w-full rounded"
          sizes="(max-width: 896px) 100vw, 896px"
        />
      )}
      <div className="mb-4">
        <h2 className="mt-2 mb-4 text-4xl font-bold">{blogPost.title}</h2>
        <div className="flex items-center">
          <p className="text-gray-500">Alireza</p>
          <div className="mx-4 text-gray-500">|</div>
          <p className="text-gray-500">
            {new Date(blogPost.date).toLocaleDateString('en-GB')}
          </p>
        </div>
        <div className="my-2 h-1 w-full rounded bg-gray-500 opacity-50" />
      </div>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeExternalLinks]}
        className="prose xl:prose-lg 2xl:prose-xl max-w-none text-justify leading-tight"
      >
        {blogPost.content as string}
      </ReactMarkdown>
      <div>
        <div>
          <h3 className="mt-8 mb-4 text-2xl font-bold">Tags</h3>
        </div>
        <div className="mt-2 flex items-center">
          {blogPost.tags.map((tag) => (
            <span
              key={tag}
              className="mr-2 rounded-full bg-gray-200 px-2 py-1 text-sm text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
