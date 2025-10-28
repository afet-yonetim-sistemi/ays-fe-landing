/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  typedRoutes: true,

  typescript: {
    ignoreBuildErrors: false,
  },

  productionBrowserSourceMaps: false,
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{member}}',
    },
  },

  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@tanstack/react-query',
      'react-hook-form',
    ],
  },
}

export default nextConfig
