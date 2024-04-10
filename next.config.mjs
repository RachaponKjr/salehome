import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['http://18.140.121.108:5500/public/img_all/'],
        unoptimized: true
    },
};


export default withNextIntl(nextConfig);
