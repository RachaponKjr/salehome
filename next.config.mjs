import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['https://www.cfasia.co.th/public/img_all/'],
    unoptimized: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.node$/,
      use: 'node-loader',
    });
    return config;
  },
};

export default withNextIntl(nextConfig);
