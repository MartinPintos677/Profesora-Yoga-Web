/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.1.3', '192.168.1.4'],
  images: {
    unoptimized: true,
  },
}

export default nextConfig
