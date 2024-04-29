import Contact from '@/containers/contactPage/Contact'
import { useTranslations } from 'next-intl'
import Head from 'next/head'
import React from 'react'

export const metadata = {
    title: 'Contact',

}
function page() {
    const t = useTranslations('NavbarManu')
    return (
        <>
            <Head>
                <link rel="alternate" hrefLang="th" href="http://cfasia.co.th/th/contact" />
                <link rel="alternate" hrefLang="en" href="http://cfasia.co.th/en/contact" />
            </Head>
            <Contact homeManu={t("HomeManu")} contactManu={t("ContactManu")} />
        </>
    )
}

export default page