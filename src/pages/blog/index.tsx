import type { GetStaticProps } from 'next';
import type { BlogPost } from '@/features/blog/@types';
import { getBlogPosts } from '@/utils/notion';
import Link from 'next/link';

interface Props {
  blogPosts: BlogPost[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogPosts = await getBlogPosts();
  return { props: { blogPosts }, revalidate: 60 };
};

export default function BlogPosts({ blogPosts }: Props) {
  return (
    <div className="container mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Blog Posts</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.title} className="mb-8">
            <Link
              className="text-2xl font-bold text-blue-500 hover:underline"
              href={`/blog/${post.slug}`}
            >
              {post.title}
            </Link>
            <p className="mt-2 text-gray-500">{post.description}</p>
            <div className="mt-4 flex items-center">
              {post.authors.map((author) => (
                <p key={author} className="text-gray-500">
                  {author}
                </p>
              ))}
              <p className="mx-4 text-gray-500">|</p>
              <p className="text-gray-500">
                {new Date(post.created).toLocaleDateString('en-GB')}
              </p>
            </div>
            <div className="mt-2 flex items-center">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="mr-2 rounded-full bg-gray-200 px-2 py-1 text-sm text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
