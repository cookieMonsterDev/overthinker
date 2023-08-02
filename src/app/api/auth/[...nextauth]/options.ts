import { Api } from "@/lib/axios";
import { isAxiosError } from "axios";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
          const { data } = await Api.post("/auth/login", {
            ...credentials,
          });

          return data;
        } catch (error) {
          // if (isAxiosError(error)) {
          //   return {
          //     error: error.response?.data.message,
          //     status: error.response?.data.statusCode,
          //     ok: false,
          //   };
          // } else {
          //   return {
          //     error: "Something went wrong!",
          //     status: 0,
          //     ok: false,
          //   };
          // }
          return null
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
      const user = token.user as any;
      session.user = {
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        ...user,
      } as any;
      return session;
    },
  },
};

export default options;
