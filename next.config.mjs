/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // required for GitHub Pages

  basePath: '/MangroveSpot',      // your repo name
  assetPrefix: '/MangroveSpot/',  // VERY IMPORTANT

  images: {
    unoptimized: true, // required for static export
  },

  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
