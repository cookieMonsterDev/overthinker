
import { Api } from "@/lib/axios";
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
          return null;
        }
      },
    }),
  ],
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