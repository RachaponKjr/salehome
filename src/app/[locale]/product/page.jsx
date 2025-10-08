import SalePage from '@/containers/salePage/Salepage';
import { useTranslations } from 'next-intl';
import React from 'react';

function page() {
  const t = useTranslations('NavbarManu');
  return (
    <>
      <SalePage homeManu={t('HomeManu')} Product={t('Product')} />
    </>
  );
}

export default page;
