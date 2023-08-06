import { Api } from "@/lib/axios/config";
import { Me } from "@/types/me.type";
import { isAxiosError } from "axios";
import { NextAuthOptions } from "next-auth";
import jwt from "jsonwebtoken";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginUserServise } from "@/lib/axios/services";
import { errorToast } from "@/common/toastNotifications";

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

          return data;
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
      const user = token.user as Me;
      const theToken = token.token as string;
      const decodedToken = jwt.decode(theToken) as any;
      session.user = { ...user, token: theToken };
      session.expires = new Date(decodedToken.exp * 1000).toISOString();
      return session;
    },
  },
};

export default options;
