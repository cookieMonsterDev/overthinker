"use client";
import { NavBarProps } from "./NavBar.types";
import styles from "./NavBar.module.scss";
import Link from "next/link";
import { Search } from "../Search";
import { Button } from "../Button";
import { IconsEnum } from "@/common/constants";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { UserMenu } from "../UserMenu";

export const NavBarComponent: React.FC<NavBarProps> = () => {
  const { data: session } = useSession();

  return (
    <nav className="container h-18 px-6 flex justify-between border-b-border">
      <div className={styles.subcontainer_left}>
        <Link href="/" className={styles.title} aria-label="home page">
          OverThinker
        </Link>
        <Search />
      </div>
      <div className={styles.subcontainer_right}>
        <Link
          href="/new-article"
          className={styles.write_button_container}
          aria-label="new article page"
        >
          <Image
            src={IconsEnum.write}
            width={34}
            height={34}
            priority
            alt="write_icon"
          />
          <span>Write</span>
        </Link>
        {!session && (
          <>
            <Link href="/auth/register" aria-label="registration page">
              <Button className={styles.button} variant="success">
                Sign up
              </Button>
            </Link>
            <Link href="/auth/login" aria-label="login page">
              <Button className={styles.button} variant="text">
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
