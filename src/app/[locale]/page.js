import Loading from "@/components/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const DynamicHomePage = dynamic(
  () => import("@/containers/homePage/HomePage"),
  {
    loading: () => <Loading />,
  }
);

export default function Home() {
  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="th" href="http://cfasia.co.th/th" />
        <link rel="alternate" hrefLang="en" href="http://cfasia.co.th/en" />
      </Head>
      <DynamicHomePage />
    </>
  );
}
