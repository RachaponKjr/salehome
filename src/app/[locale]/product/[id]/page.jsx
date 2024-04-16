
import Loading from "@/components/Loading";
import dynamic from "next/dynamic";


const DynamicGetProductPage = dynamic(() => import("@/containers/gat_product/HomeGet"), {
  loading: () => <Loading />,
})
 async function Page({params : {id}}) {
  const data = await getData({id})
  return (
    <DynamicGetProductPage datafetch={data}/>
  );
}

export async function getData({id}) {
  const res = await fetch(`http://18.140.121.108:5500/getsalehome/${id}`, {
    method: 'GET',
    cache: 'no-store'
})
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default Page

