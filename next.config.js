/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig;
