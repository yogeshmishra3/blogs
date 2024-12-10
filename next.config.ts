import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')], // Adjust the path to your styles folder as needed
  },
  output: 'export',
  basePath: '/blogs',
  assetPrefix: '/blogs',
};

export default nextConfig;
