/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_WAVVY_API_KEY}/:path*`
      }
    ];
  }
};

module.exports = nextConfig;
