import HomePage from "@/containers/homePage/HomePage";
import { useTranslations } from "next-intl";
import Head from "next/head";

// const DynamicHomePage = dynamic(
//   () => import("@/containers/homePage/HomePage"),
//   {
//     loading: () => <Loading />,
//   }
// );
export const metadata = {
  title: "CFAM ทรัพย์รอการขาย",
  description: "บริษัทบริหารสินทรัพย์ ซีเอฟเอเชีย จำกัด ขายทรัพย์สิน ที่ดินว่างเปล่า บ้านเดี่ยว ทาวน์เฮ้าส์ อาคารพาณิชย์ ตึกแถว ห้องชุดพักอาศัย",
  keywords: "CFAM ทรัพย์รอการขาย",
};

export default function Home() {
  const t = useTranslations('Tags')
  return (
    <>
      <Head>
        <link
          rel="alternate"
          hrefLang="th"
          href="https://www.cfasia.co.th/th"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://www.cfasia.co.th/en"
        />
        <link rel="canonical" href={`https://www.cfasia.co.th/`} />
      </Head>
      <HomePage allTags={t('All')} areaTags={t('Area')} homeTags={t('Home')} buildingTags={t('Building')} />
    </>
  );
}
