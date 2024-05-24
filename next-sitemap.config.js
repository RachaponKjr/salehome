/** @type {import('next-sitemap').IConfig} */


module.exports = {
  siteUrl: 'https://www.cfasia.co.th/',
  changefreq: 'daily',
  generateRobotsTxt: true,
  exclude: ['/blogs', '/contact'],
  alternateRefs: [
    {
      href: 'https://www.cfasia.co.th/th/',
      hreflang: 'th',
    },
    {
      href: 'https://www.cfasia.co.th/en/',
      hreflang: 'en',
    },
  ],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.cfasia.co.th/sitemap-1.xml'
    ],
  },
}