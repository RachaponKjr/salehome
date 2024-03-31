import { Prompt } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import CookieConsent from "@/components/CookieConsent";
import Providers from "@/chakaUi/providers";
import dynamic from "next/dynamic";

const inter = Prompt({ subsets: ["latin", "thai"],weight:"500" });

export const metadata = {
  title:{
    template: "%s | CFAM",
    default: "CFAM",
  },
  description: "Generated by create next app",
};

export const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* เรียกใช้ Provider Chakra เพื่อให้ สามารถใช้ Chakra ได้ */}
        <Providers>
          {/* ส่วนของ Navbar */}
          <Navbar />
          {children}
          {/* ส่วน Footer */}
          <Footer />
          {/* Cookie Consent */}
          {/* <CookieConsent/> */}
        </Providers>
      </body>
    </html>
  );
}
