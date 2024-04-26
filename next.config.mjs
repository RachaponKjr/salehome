import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['https://www.cfasia.co.th/public/img_all/'],
        unoptimized: true
    },
};


export default withNextIntl(nextConfig);
