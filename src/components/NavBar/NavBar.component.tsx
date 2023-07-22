"use client";
import React from "react";
import { NavBarProps } from "./NavBar.types";
import styles from "./NavBar.module.scss";
import Link from "next/link";

export const NavBarComponent: React.FC<NavBarProps> = ({}) => {
  return (
    <nav className={styles.container}>
      <div className={styles.subcontainer_left}>
        <Link href='/' className={styles.title}>OverThinker</Link>
        <div>
          <input />
        </div>
      </div>
    </nav>
  );
};
