/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["https://avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
