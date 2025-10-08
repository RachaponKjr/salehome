import Payment from '@/containers/payPage/payment';
import { useTranslations } from 'next-intl';
import React from 'react';

function page() {
  const t = useTranslations('NavbarManu');
  return (
    <>
      <Payment homeManu={t('HomeManu')} Payment={t('Payment')} />
    </>
  );
}

export default page;
