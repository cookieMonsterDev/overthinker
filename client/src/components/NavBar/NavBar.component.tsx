"use client";

import Link from "next/link";
import { Search } from "../Search";
import { Button } from "../Button";
import { IconsEnum } from "@/common/constants";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { UserMenu } from "../UserMenu";

export const NavBarComponent = () => {
  const { data: session } = useSession();

  return (
    <nav className="container h-18 py-4 flex justify-between border-b-border">
      <div className="flex items-center">
        <Link
          href="/"
          className="font-chomsky text-4xl font-medium mr-4"
          aria-label="home page"
        >
          OverThinker
        </Link>
        <Search />
      </div>
      <div className="flex items-center gap-[0.6rem]">
        <Link
          href="/new-article"
          className="flex items-center px-4"
          aria-label="new article page"
        >
          <Image
            src={IconsEnum.write}
            width={34}
            height={34}
            priority
            alt="write_icon"
          />
          <span className="ml-[0.3rem]">Write</span>
        </Link>
        {!session && (
          <>
            <Link href="/auth/register" aria-label="registration page">
              <Button className="px-4 py-2" variant="success">
                Sign up
              </Button>
            </Link>
            <Link href="/auth/login" aria-label="login page">
              <Button className="px-4 py-2" variant="text">
                Sign in
              </Button>
            </Link>
          </>
        )}
        <UserMenu />
      </div>
    </nav>
  );
};
