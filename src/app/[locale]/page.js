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
      <DynamicHomePage />;
    </>
  );
}
