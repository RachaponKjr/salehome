import { Prompt } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import CookieConsent from "@/components/CookieConsent";
import dynamic from "next/dynamic";
import Providers from "@/chakaUi_Provider/Providers";

import {useTranslations} from 'next-intl';


const inter = Prompt({ subsets: ["latin", "thai"],weight:"500" });

export const metadata = {
  title:{
    template: "%s | CFAM",
    default: "CFAM",
  },
  description: "CFAM ขาบบ้าน",
};

export const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
export const CookieConsent = dynamic(() => import("@/components/CookieConsent"), { ssr: false });
export default function RootLayout({ children , params: {locale}}) {

  const t = useTranslations('NavbarManu')

  return (
    <html lang={locale}>
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <meta name="keywords" content="บริษัท บริหารสินทรัพย์ ขายบ้าน,แล้วก็มีอีกอัน เป็น CFAM ขายบ้าน"/>
      <body className={inter.className}>
        {/* เรียกใช้ Provider Chakra เพื่อให้ สามารถใช้ Chakra ได้ */}
        <Providers>
          {/* ส่วนของ Navbar */}
          <Navbar homeManu={t('HomeManu')} blogsManu={t('BlogManu')} contactManu={t('ContactManu')}/>
          {children}
          {/* ส่วน Footer */}
          <Footer />
          {/* Cookie Consent */}
          <CookieConsent/>
        </Providers>
      </body>
    </html>
  );
}
