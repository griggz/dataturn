import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import getUserDetails from "../../../apps/auth/utils/getUserDetails";
// import EmailProvider from "next-auth/providers/email"

let prisma;

if (process.env.NODE_ENV === "live") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  debug: process.env.ENV === "dev",
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // EmailProvider({})
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      const locateUrl = url.includes("auth") ? baseUrl : url;
      return url.startsWith(baseUrl)
        ? Promise.resolve(locateUrl)
        : Promise.resolve(baseUrl);
    },
    async jwt({ token, user, ...other }) {
      console.log(other);
      // Persist the OAuth access_token to the token right after signin
      user && (token.user = user);
      return token;
    },
    async session({ session, user }) {
      const allUser = await prisma.user.findUnique({
        where: {
          id: user.id,
        },
        include: {
          groups: true,
        },
      });
      session.user = allUser;
      session.isAdmin = allUser.groups.map((g) => g.group).includes("admin");
      return Promise.resolve(session);
    },
  },
});
