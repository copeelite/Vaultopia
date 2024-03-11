import NextAuth, {DefaultSession} from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "@/../auth.config"

import {getUserById} from "@/data/user"
import {db} from "@/lib/db"


import {
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
  authRoutes,
  apiAuthPrefix,
} from "@/routes";
import { NextRequest, NextResponse } from "next/server";
import { locales } from "@/i18n/config";

// declare module "@auth/core" {
//   interface Session {
//     user: {
//     role: string;
//     } & DefaultSession["user"];
//   }
// }



const publicPagesPathnameRegex = RegExp(
  `^(/(${locales.join("|")}))?(${[...publicRoutes, ...authRoutes]
    .flatMap((p) => (p === "/" ? ["", "/"] : p))
    .join("|")})/?$`,
  "i"
);

const authPagesPathnameRegex = RegExp(
  `^(/(${locales.join("|")}))?(${authRoutes
    .flatMap((p) => (p === "/" ? ["", "/"] : p))
    .join("|")})/?$`,
  "i"
);

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  trustHost: true,
  pages:{
    signIn: "/signin",
    error: "/auth/error",
  },
  events: {
    async linkAccount({user}){
      await db.user.update({
        where: {
          id: user.id
        },
        data: {
          emailVerified: new Date()
        }
      })
    }

  },
  callbacks: {
     authorized: ({ auth, request }) => {
      const { nextUrl } = request;

      const isAuthenticated = !!auth;
      const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
      const isPublicPage = publicPagesPathnameRegex.test(nextUrl.pathname);
      const isAuthPage = authPagesPathnameRegex.test(nextUrl.pathname);
      if (isApiAuthRoute) {
        return;
      }
      if (isAuthenticated && isAuthPage)
        return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));

      if (!(isAuthenticated || isPublicPage)) {
        return NextResponse.redirect(
          new URL(`/signin?callbackUrl=${nextUrl.pathname}`, nextUrl)
        );
      }
      return;
    },
    // async signIn({ user}) {
    //   const existingUser = await getUserById(user.id ?? '')
    //   if(!existingUser || !existingUser.emailVerified) {
    //     return false
    //   }
    //   return true
    // },
    async session({ session, token }) {
      //console.log("session", {sessionToken: token});
      if (token.sub && session.user) {
        session.user.id = token.sub
      }
      if (token.role && session.user) {
        session.user.role = token.role
      }
      if(session){
        session.user.name = token.name
        session.user.email = token.email!
      }
      return session;
    },
    async jwt({token})
    {
      if(!token.sub) return token
      const existingUser = await getUserById(token.sub)
      if(!existingUser) return token

      token.name = existingUser.name
      token.email = existingUser.email
      token.role = existingUser.role

      return token;
    
    }

  },
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  ...authConfig,
  
})