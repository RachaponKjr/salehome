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
    default: "บริษัท บริหารสินทรัพย์ ซีเอฟ เอเชีย จำกัด ขายบ้าน",
  },
  description:
    "บริษัท บริหารสินทรัพย์ ซีเอฟ เอเชีย จำกัด ขายบ้าน มือสอง ทาวน์เฮาส์ และ อื่นๆอีกมากมายให้ติดตาม",
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
