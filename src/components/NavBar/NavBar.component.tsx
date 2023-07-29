"use client";
import React from "react";
import { NavBarProps } from "./NavBar.types";
import styles from "./NavBar.module.scss";
import Link from "next/link";
import { Search } from "../Search";
import { Button } from "../Button";
import { SvgIcon } from "../SvgIcon";
import { IconsEnum } from "@/common/constants";

export const NavBarComponent: React.FC<NavBarProps> = () => {

  return (
    <nav className={styles.container}>
      <div className={styles.subcontainer_left}>
        <Link href="/" className={styles.title}>
          OverThinker
        </Link>
        <Search />
      </div>
      <div className={styles.subcontainer_right}>
        <Link href="/new-article" className={styles.write_button_container}>
          <SvgIcon src={IconsEnum.write} size={34} />
          <span>Write</span>
        </Link>
        <Link href="/auth/register">
          <Button className={styles.button} variant="success">
            Sign up
          </Button>
        </Link>
        <Link href="/auth/login">
          <Button className={styles.button} variant="text">
            Sign in
          </Button>
        </Link>
      </div>
    </nav>
  );
};
