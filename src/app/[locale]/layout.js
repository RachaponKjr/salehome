import { Prompt } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import Providers from "@/chakaUi_Provider/Providers";

import { useMessages, useTranslations } from "next-intl";
import { Box } from "@chakra-ui/react";

const inter = Prompt({ subsets: ["latin", "thai"], weight: "500" });

export const metadata = {
  title: {
    template: "%s | CFAM",
    default: "cf asia ทรัพย์รอการขาย",
  },
  description:
    "บริษัทบริหารสินทรัพย์ ซีเอฟเอเชีย จำกัด ขายทรัพยืสิน ที่ดินว่างเปล่า บ้านเดี่ยว ทาวน์เฮ้าส์ อาคารพาณิชย์ ตึกแถว ห้องชุดพักอาศัย",
  keywords: "cfam ขายบ้าน, cf asia ทรัพย์รอการขาย",
  verification: {
    google: "klnSAKdQm-s3JYx6hydVWCY4ypaKeBJDfbsDy9aZHmk",
  },
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
  const message = useMessages();

  return (
    <html lang={locale}>
      <link rel="icon" href="/imgs/headicon.png" />
      {/* <meta
          name="keywords"
          content="cfam ขายบ้าน, cf asia ทรัพย์รอการขาย"
        /> */}
      {/* <meta name="robots" content="noindex, nofollow"/> */}
      <body className={inter.className}>
        {/* เรียกใช้ Provider Chakra เพื่อให้ สามารถใช้ Chakra ได้ */}
        {/* <NextIntlClientProvider locale={locale} messages={message} > */}
          <Providers>
            {/* ส่วนของ Navbar */}
            <Navbar
              homeManu={t("HomeManu")}
              blogsManu={t("BlogManu")}
              contactManu={t("ContactManu")}
            />
            <Box
              bgImage={"/bg-service.jpg"}
              pb={4}
              bgRepeat={"no-repeat"}
              bgPosition={"top"}
              bgSize={"cover"}
              bgColor={"#D6D6D6"}
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
