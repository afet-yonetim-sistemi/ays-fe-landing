/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  typedRoutes: true,
}

export default nextConfig
