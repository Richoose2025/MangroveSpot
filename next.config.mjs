/** @type {import('next').NextConfig} */
<<<<<<< HEAD
=======
// const nextConfig = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//       },
//     ],
//   },
// }

// export default nextConfig

/** @type {import('next').NextConfig} */
>>>>>>> 605fb0c0f67176e3797055ccfa02ad26b1b50622
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
<<<<<<< HEAD

=======
>>>>>>> 605fb0c0f67176e3797055ccfa02ad26b1b50622
  async redirects() {
    return [
      {
        source: '/tours',
        destination: '/',
        permanent: true,
      },
<<<<<<< HEAD
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
=======
    ];
  },
}

export default nextConfig
>>>>>>> 605fb0c0f67176e3797055ccfa02ad26b1b50622
