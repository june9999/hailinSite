import { match } from "@formatjs/intl-localematcher";
// HTTP content negitation
import Negotiator from "negotiator";
import { NextRequest } from "next/server";

let locales = ["en-US", "zh-cn", "de-de"];

function getLocale(request: NextRequest) {
  const header = request.headers.get("accept-language") as string;
  let headers = {
    "accept-language": header,
  };
  let languages = new Negotiator({ headers }).languages();
  let defaultLocale = "en-US";
  return match(languages, locales, defaultLocale); // -> 'en-US'}
}

export function middleware(request: NextRequest) {
  console.log("middleware");
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
