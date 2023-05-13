/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['i.seadn.io','nft-cdn.alchemy.com'],
  },
}

module.exports = nextConfig;
