/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.cfasia.co.th",
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    additionalSitemaps: ["https://www.cfasia.co.th/sitemap-2.xml"],
  },
};
