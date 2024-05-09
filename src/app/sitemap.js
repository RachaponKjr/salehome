const defaultLocale = "th";
const locales = ["th", "en"];
const host = "https://www.cfasia.co.th";
export default async function sitemap() {
//   const pathname = ["/", "/contact", "/blogs"];
const pathname = [{
    url: "/",
},{
    url: "/contact",
},{
    url: "/blogs",
}
];
  const res = await getAll();
  const data = pushUrl(res);
//   รวมข้อมูล pathname
  pathname.push(...data);
  function getUrl(locale, pathname) {
    return `${host}/${locale}${pathname === "/" ? "" : pathname}`;
  }
  return pathname.map((pathname) => ({
    url: getUrl(defaultLocale, pathname.url),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [locale,getUrl(locale, pathname.url)])
      ),
    },
  }));
}

function getAll() {
  const data = fetch(`http://18.140.121.108:5500/getsalehome`)
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return data;
}

function pushUrl(res) {
  const data = res.data;
  const newData = Array.from(data);
  // map data
  const map = newData.map((item) => {
    return {
      url: `/product/${item._id}`,
    };
  });
  return map;
}
