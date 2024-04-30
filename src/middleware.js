import createMiddleware from "next-intl/middleware";
import { locales, localePrefixes } from "./navigation";

export default createMiddleware({
  defaultLocale: "th",
  locales,
  localePrefixes,
  // domains: [
  //   {
  //     domain: "https://www.cfasia.co.th",
  //     defaultLocale: "th",
  //     locales: ["th", "en"],
  //   }
  // ]
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(th|en)/:path*"],
};
