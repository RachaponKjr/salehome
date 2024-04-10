import createMiddleware from 'next-intl/middleware';
import { locales,localePrefixes } from './navigation';


export default createMiddleware({
    locales,
    localePrefixes,
    defaultLocale: 'th'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(th|en)/:path*']
};