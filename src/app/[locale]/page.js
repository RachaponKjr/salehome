import Loading from "@/components/Loading";
// import HomePage from "@/pages/homePage/HomePage";
import dynamic from "next/dynamic";

const DynamicHomePage = dynamic(() => import("@/containers/homePage/HomePage"), {
  loading: () => <Loading />,
})

export const metadata = {
  title: "CF Asia Asset Management",
  description: "บริษัท บริหารสินทรัพย์ ขายบ้าน",  
}
export default function Home() {
  return <DynamicHomePage />;
}
