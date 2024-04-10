import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["th", "en"];
export const localePrefixes = "as-needed";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(locales, localePrefixes);
