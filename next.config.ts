import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization for better LCP
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  async redirects() {
    return [
      {
        source: '/tecnica/geladeira-arria-bateria',
        destination: '/tecnica/geladeira-caminhao-descarregando-bateria',
        permanent: true,
      },
      {
        source: '/tecnica/codigos-erro-geladeira-e1-e2-e3',
        destination: '/tecnica/codigos-erro-geladeira-resfriar-e1-e2-e3-manual',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
