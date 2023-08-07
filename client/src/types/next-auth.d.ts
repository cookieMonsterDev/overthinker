import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      username: string;
      email: string;
      firstName: string | null;
      lastName: string | null;
      bio: string | null;
      avatarUrl: string | null;
      role: "USER" | "ADMIN";
      _id: string;
      createdAt: Date;
      updatedAt: Date;
      __v: number;
      token: string;
    };
  }
}
