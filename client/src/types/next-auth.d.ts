import NextAuth from "next-auth/next";
import { Me } from "./me.type";

declare module "next-auth" {
  interface Session {
    user: Me;
  }
}
