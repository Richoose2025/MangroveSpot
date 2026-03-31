/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/tours',
        destination: '/',
        permanent: true,
      },
      {
        source: '/kayaking',
        destination: '/',
        permanent: true,
      },
      {
        source: '/water-sports',
        destination: '/',
        permanent: true,
      },
      {
        source: '/paravur',
        destination: '/',
        permanent: true,
      },
      {
        source: '/varkala',
        destination: '/',
        permanent: true,
      },
      {
        source: '/backwaters',
        destination: '/',
        permanent: true,
      },
    ]
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ]
  },
}

export default nextConfig