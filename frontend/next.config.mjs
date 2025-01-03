/** @type {import('next').NextConfig} */
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

export default (phase) => {
const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const nextConfig = {
    distDir: 'build',
      images: {
        unoptimized: true
      },
      output: 'export',
      reactStrictMode: true
    };

    return nextConfig;
}

