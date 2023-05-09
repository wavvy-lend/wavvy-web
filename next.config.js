/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: `${process.env.NEXT_PUBLIC_WAVVY_BASE_URL}/:path*`
  //     }
  //   ];
  // }
};

module.exports = nextConfig;
