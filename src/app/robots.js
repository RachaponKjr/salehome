export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: "https://d1khbhemldrtbs.cloudfront.net/sitemap.xml",
    };
}