/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unsplash.com","konachan.net"
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
