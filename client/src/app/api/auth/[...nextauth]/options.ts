import { isAxiosError } from "axios";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginUserServise } from "@/services/auth";
import { PrivateUser } from "@/services/auth/types";

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Email",
        },
        password: {
          label: "Password:",
          type: "text",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        try {
          const data = await loginUserServise({
            email: credentials?.email!,
            password: credentials?.password!,
          });

          return data as any;
        } catch (error) {
          if (isAxiosError(error)) {
            throw new Error(error.response?.data.message);
          } else {
            throw new Error("Something went wrong!");
          }
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ user, token }) {
      return { ...user, ...token };
    },
    async session({ session, token }) {
      const user = token.user as PrivateUser;
      const theToken = token.token as string;
      session.user = { ...user, token: theToken };
      session.expires = new Date(
        new Date().getTime() + 7 * 24 * 60 * 60 * 1000
      ).toISOString();
      return session;
    },
  },
};

export default options;
