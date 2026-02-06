import type { NextConfig } from 'next';
import { withSentryConfig } from '@sentry/nextjs';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: '*.amazonaws.com',
        protocol: 'https',
      },
    ],
  },
};

const sentryBuildOptions = {
  org: 'alireza-fatemi',
  project: 'personal-website',
  widenClientFileUpload: true,
  tunnelRoute: '/monitoring',
  hideSourceMaps: true,
  disableLogger: true,
};

export default withSentryConfig(nextConfig, sentryBuildOptions);
