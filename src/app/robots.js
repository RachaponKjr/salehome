export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: "https://www.cfasia.co.th/sitemap.xml",
    };
}