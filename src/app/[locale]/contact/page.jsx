import Contact from '@/containers/contactPage/Contact'
import { useTranslations } from 'next-intl'
import React from 'react'

function page() {
    const t = useTranslations('NavbarManu')
    return (
        <>
            <Contact homeManu={t("HomeManu")} contactManu={t("ContactManu")} />
        </>
    )
}

export default page