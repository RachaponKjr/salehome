
import Loading from "@/components/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";


const DynamicGetProductPage = dynamic(() => import("@/containers/gat_product/HomeGet"), {
  loading: () => <Loading />,
})

export async function generateMetadata({ params: id }) {
  // fetch data
  const product = await getData(id)
  return {
    title: product?.data?.number_home,
    description: product?.data?.detail_home,
    keywords: product?.data?.name_home + product?.data?.province
  }

}

async function Page({ params: { id } }) {
  const data = await getData({ id })
  return (
    <>
    {/* <Head>
      <title>{data?.data?.name_home}</title>
    </Head> */}
      <DynamicGetProductPage datafetch={data} />
    </>
  );
}

export async function getData({ id }) {
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


