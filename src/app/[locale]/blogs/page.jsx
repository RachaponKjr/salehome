import Blogs from '@/containers/blogPage/Blogs'
import { useTranslations } from 'next-intl'
import React from 'react'

function page() {
  const t = useTranslations('NavbarManu')
  return (
    <>
      <Blogs homeManu={t("HomeManu")} blogManu={t("BlogManu")} />
    </>
  )
}

export default page