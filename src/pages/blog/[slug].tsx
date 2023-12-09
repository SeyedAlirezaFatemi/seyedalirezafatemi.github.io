import React from 'react';
import rehypeExternalLinks from 'rehype-external-links';
import ReactMarkdown from 'react-markdown';
import type { GetStaticPaths, GetStaticProps } from 'next';
import rehypeRaw from 'rehype-raw';
import type { BlogPost } from '@/features/blog/@types';
import { getBlogPost, getBlogPosts } from '@/utils/notion';
import Image from 'next/image';

interface Props {
  blogPost: BlogPost;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogPosts = await getBlogPosts();
  const paths = blogPosts.map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const blogPost = await getBlogPost(params?.slug as string);

  return {
    props: {
      blogPost,
    },
    revalidate: 60,
  };
};

export default function BlogPostPage({ blogPost }: Props) {
  return (
    <article className="container mx-auto">
      {blogPost.cover && (
        <Image
          width={600}
          height={400}
          src={blogPost.cover}
          alt={blogPost.title}
          className="w-full rounded"
        />
      )}
      <div className="mb-4">
        <h2 className="mb-4 mt-2 text-4xl font-bold">{blogPost.title}</h2>
        <div className="flex items-center">
          {/*{blogPost.authors.map((author) => (*/}
          {/*  <p key={author} className="ml-4 text-gray-500">*/}
          {/*    {author}*/}
          {/*  </p>*/}
          {/*))}*/}
          <p className="text-gray-500">Alireza</p>
          <div className="mx-4 text-gray-500">|</div>
          <p className="text-gray-500">
            {new Date(blogPost.date).toLocaleDateString('en-GB')}
          </p>
        </div>
        <div className="my-2 h-1 w-full rounded bg-gray-500 opacity-50" />
      </div>
      <ReactMarkdown
        remarkPlugins={[rehypeExternalLinks]}
        className="prose max-w-none text-justify leading-tight xl:prose-lg 2xl:prose-xl"
        rehypePlugins={[rehypeRaw]}
      >
        {blogPost.content as string}
      </ReactMarkdown>
      <div>
        <div>
          <h3 className="mb-4 mt-8 text-2xl font-bold">Tags</h3>
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
