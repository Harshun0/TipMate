import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  env: {
    MONGODB_URI: process.env.MONGODB_URI
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias['@/models'] = path.resolve('./src/models');
    config.resolve.alias['@/lib'] = path.resolve('./src/lib');
    
    // Ensure external dependencies are resolved
    config.externals = [...(config.externals || [])];
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        mongoose: false
      };
    }
    
    return config;
  },
  typescript: {
    ignoreBuildErrors: false
  }
};

export default nextConfig; 