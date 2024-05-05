import HomePage from "@/containers/homePage/HomePage";
import Head from "next/head";

// const DynamicHomePage = dynamic(
//   () => import("@/containers/homePage/HomePage"),
//   {
//     loading: () => <Loading />,
//   }
// );

export default function Home() {
  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="th" href="https://www.cfasia.co.th/th" />
        <link rel="alternate" hrefLang="en" href="https://www.cfasia.co.th/en" />
        <link rel="canonical" href={`https://www.cfasia.co.th/`} />
      </Head>
      <HomePage />
    </>
  );
}
