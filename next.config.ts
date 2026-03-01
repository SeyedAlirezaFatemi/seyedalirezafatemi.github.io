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
    minimumCacheTTL: 1800,
  },
};

const sentryBuildOptions = {
  org: 'alireza-fatemi',
  project: 'personal-website',
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
};

export default withSentryConfig(nextConfig, sentryBuildOptions);
