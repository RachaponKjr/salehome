export default function sitemap() {
    return [
        {
            url: 'https://www.cfasia.co.th/',
            lastModified: new Date(),
            alternates:{
                languages:{
                    'th': 'https://www.cfasia.co.th/th',
                    'en': 'https://www.cfasia.co.th/en',
                }
            }
        },
        {
            url: 'https://www.cfasia.co.th/blog',
            lastModified: new Date(),
            alternates:{
                languages:{
                    'th': 'https://www.cfasia.co.th/th/blog',
                    'en': 'https://www.cfasia.co.th/en/blog',
                }
            }
        },
        {
            url: 'https://www.cfasia.co.th/contact',
            lastModified: new Date(),
            alternates:{
                languages:{
                    'th': 'https://www.cfasia.co.th/th/contact',
                    'en': 'https://www.cfasia.co.th/en/contact',
                }
            }
        }
    ]
}