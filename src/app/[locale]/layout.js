import { Prompt } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/Navbar';
import dynamic from 'next/dynamic';
import Providers from '@/chakaUi_Provider/Providers';

import { useTranslations } from 'next-intl';
import { Box } from '@chakra-ui/react';

const inter = Prompt({ subsets: ['latin', 'thai'], weight: '500' });

export const metadata = {
  title: {
    default: 'CFAM ทรัพย์รอการขาย',
  },
  description:
    'บริษัทบริหารสินทรัพย์ ซีเอฟเอเชีย จำกัด ขายทรัพย์สิน ที่ดินว่างเปล่า บ้านเดี่ยว ทาวน์เฮ้าส์ อาคารพาณิชย์ ตึกแถว ห้องชุดพักอาศัย',
  keywords: 'CFAM ทรัพย์รอการขาย',
  // ยืนยัน Google Site Verification
  verification: {
    google: 'KeIk_P740J-6obP1awqzp-HIAEjkJDoQN43jXKeuS2E',
  },
};
export const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: false,
});
export const CookieConsent = dynamic(
  () => import('@/components/CookieConsent'),
  { ssr: false }
);
export default function RootLayout({ children, params: { locale } }) {
  const t = useTranslations('NavbarManu');

  return (
    <html lang={locale}>
      <link rel="icon" href="/imgs/headicon.png" />
      <body className={inter.className}>
        {/* เรียกใช้ Provider Chakra เพื่อให้ สามารถใช้ Chakra ได้ */}
        <Providers>
          {/* ส่วนของ Navbar */}
          <Navbar
            homeManu={t('HomeManu')}
            blogsManu={t('BlogManu')}
            contactManu={t('ContactManu')}
            docHome={t('docHome')}
          />
          <Box
            bgImage={'/bg-service.jpg'}
            pb={4}
            bgRepeat={'no-repeat'}
            bgPosition={'top'}
            bgSize={'cover'}
            bgColor={'#D6D6D6'}
          >
            {children}
          </Box>
          {/* ส่วน Footer */}
          <Footer />
          {/* Cookie Consent */}
          <CookieConsent />
        </Providers>
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}
