/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'xpressgo.uz' }],
        destination: 'https://www.xpressgo.uz/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
