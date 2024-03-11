// import NextAuth from "next-auth";
// import authConfig from "@/auth.config";
// import { NextRequest } from "next/server";
// import createIntlMiddleware from "next-intl/middleware";
// import {
//   DEFAULT_LOGIN_REDIRECT,
//   publicRoutes,
//   authRoutes,
//   apiAuthPrefix,
// } from "@/routes";
// import { pathnames, localePrefix, locales } from "@/i18n/config";

// const { auth } = NextAuth(authConfig);

// const intlMiddleware = createIntlMiddleware({
//   defaultLocale: "en",
//   locales,
//   pathnames,
//   localePrefix,
// });

// const authMiddleware = auth((req) => {

//   const { nextUrl } = req;
//   const isLoggedIn = !!req.auth;

//   const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
//   const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
//   const isAuthRoute = authRoutes.includes(nextUrl.pathname);
//   if (isApiAuthRoute) {
//     return;
//   }

//   if (isAuthRoute) {
//     if (isLoggedIn) {
//       return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
//     }
//     return;
//   }

//   if (!isLoggedIn && !isPublicRoute) {
//     let callbackUrl = nextUrl.pathname;
//     if (nextUrl.search) {
//       callbackUrl += nextUrl.search;
//     }

//     const encodedCallbackUrl = encodeURIComponent(callbackUrl);

//     return Response.redirect(new URL(
//       `/signin?callbackUrl=${encodedCallbackUrl}`,
//       nextUrl
//     ));
//   }

//   return intlMiddleware(req)

// })

// export default function middleware(req: NextRequest) {
//   const publicPathnameRegex = RegExp(
//     `^(/(${locales.join("|")}))?(${publicRoutes
//       .flatMap((p) => (p === "/" ? ["", "/"] : p))
//       .join("|")})/?$`,
//     "i"
//   );
//   const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname)

//   if (isPublicPage) {
//     return intlMiddleware(req)
//   } else {
//     return (authMiddleware as any)(req)
//   }
// }

// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// }
import { auth as authMiddleware } from "@/../auth";
import createIntlMiddleware from "next-intl/middleware";
import { locales } from "@/i18n/config";

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale: "en",
});

export default authMiddleware((req) => intlMiddleware(req));

export const config = {
  matcher: [
    // "/((?!.+\\.[\\w]+$|_next).*)",
    // "/",
    // "/(api|trpc)(.*)",
    "/((?!api|_next|.*\\..*).*)",
  ],
};
