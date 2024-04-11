import createMiddleware from "next-intl/middleware";
import { locales, localePrefixes } from "./navigation";

export default createMiddleware({
  defaultLocale: "th",
  locales,
  localePrefixes,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(th|en)/:path*"],
};
