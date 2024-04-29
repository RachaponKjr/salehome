import Blogs from '@/containers/blogPage/Blogs'
import { useTranslations } from 'next-intl'
import Head from 'next/head'
import React from 'react'

export const metadata = {
  title: 'Blogs',
}
function page() {
  const t = useTranslations('NavbarManu')
  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="th" href="http://cfasia.co.th/th/blogs" />
        <link rel="alternate" hrefLang="en" href="http://cfasia.co.th/en/blogs" />
      </Head>
      <Blogs homeManu={t("HomeManu")} blogManu={t("BlogManu")} />
    </>
  )
}

export default page