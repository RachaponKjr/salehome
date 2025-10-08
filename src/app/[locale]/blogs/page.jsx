// import BlogDetail from '@/containers/blogPage/BlogDetail';
import Blogs from '@/containers/blogPage/Blogs';
import { useTranslations } from 'next-intl';
import React from 'react';

function page() {
  const t = useTranslations('NavbarManu');
  return (
    <>
      <Blogs homeManu={t('HomeManu')} blogManu={t('BlogManu')} />
      {/* <BlogDetail
        homeManu={t('HomeManu')}
        blogManu={t('BlogManu')}
        blogId="1"
      /> */}
    </>
  );
}

export default page;
