import HomeGet from '@/containers/gat_product/HomeGet';

// const DynamicGetProductPage = dynamic(() => import("@/containers/gat_product/HomeGet"), {
//   loading: () => <Loading />,
// })

// export async function generateMetadata({ params: id }) {
//   // fetch data
//   const product = await getData(id)
//   return {
//     title: product?.data?.number_home,
//     // description: product?.data?.detail_home,
//     keywords: product?.data?.name_home +  product?.data?.province
//   }

// }

async function Page({ params: { id } }) {
  const data = await getData({ id });
  return (
    <>
      {/* <DynamicGetProductPage datafetch={data} /> */}
      <HomeGet datafetch={data} />
    </>
  );
}

export async function getData({ id }) {
  const res = await fetch(`http://18.140.121.108:5500/getsalehome/${id}`, {
    method: 'GET',
    cache: 'no-store',
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return res;
}

export default Page;
