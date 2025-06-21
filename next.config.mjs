/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  env: {
    MONGODB_URI: process.env.MONGODB_URI
  }
};

export default nextConfig; 