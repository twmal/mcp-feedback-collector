/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  output: 'export',
  distDir: '.next',
  trailingSlash: false,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@radix-ui/react-*'],
  }
}

export default nextConfig
