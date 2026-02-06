import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/monitoring',
    },
    sitemap: 'https://seyedalirezafatemi.github.io/sitemap.xml',
  };
}
