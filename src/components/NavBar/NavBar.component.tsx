"use client";
import React from "react";
import { NavBarProps } from "./NavBar.types";
import styles from "./NavBar.module.scss";
import Link from "next/link";
import { signIn } from "next-auth/react";
import cn from "classnames";

export const NavBarComponent: React.FC<NavBarProps> = ({ display = true }) => {

  const nav = cn(styles.container, {
    [styles[`container_no_display`]]: !display,
  });

  return (
    <nav className={nav}>
      <div className={styles.subcontainer_left}>
        <Link href="/" className={styles.title}>
          OverThinker
        </Link>
        <div>
          <input />
        </div>
      </div>
      <button onClick={() => signIn()}>Sign In</button>
    </nav>
  );
};
