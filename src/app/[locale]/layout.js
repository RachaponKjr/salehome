import { Prompt } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import Providers from "@/chakaUi_Provider/Providers";

import { useTranslations } from "next-intl";
import Script from "next/script";
import Head from "next/head";

const inter = Prompt({ subsets: ["latin", "thai"], weight: "500" });

export const metadata = {
  title: {
    template: "%s | CFAM",
    default: "cfam ขายบ้าน",
  },
  description:
    "บริษัทบริหารสินทรัพย์ ซีเอฟเอเชีย จำกัด ขายทรัพยืสิน ที่ดินว่างเปล่า บ้านเดี่ยว ทาวน์เฮ้าส์ อาคารพาณิชย์ ตึกแถว ห้องชุดพักอาศัย",
};

export const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});
export const CookieConsent = dynamic(
  () => import("@/components/CookieConsent"),
  { ssr: false }
);
export default function RootLayout({ children, params: { locale } }) {
  const t = useTranslations("NavbarManu");

  return (
    <html lang={locale}>
      <link rel="icon" href="/imgs/headicon.png" />
        <meta
          name="keywords"
          content="cfam ขายบ้าน, cf asia ทรัพย์รอการขาย"
        />
        {/* <meta name="robots" content="noindex, nofollow"/> */}
      <body className={inter.className}>
        {/* เรียกใช้ Provider Chakra เพื่อให้ สามารถใช้ Chakra ได้ */}
        <Providers>
          {/* ส่วนของ Navbar */}
          <Navbar
            homeManu={t("HomeManu")}
            blogsManu={t("BlogManu")}
            contactManu={t("ContactManu")}
          />
          {children}
          {/* ส่วน Footer */}
          <Footer />
          {/* Cookie Consent */}
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
