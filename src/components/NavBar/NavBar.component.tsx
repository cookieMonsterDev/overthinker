"use client";
import React from "react";
import { NavBarProps } from "./NavBar.types";
import styles from "./NavBar.module.scss";
import Link from "next/link";
import { Search } from "../Search";
import { useModal } from "@/context/ModalProvider";
import { LoginComponent } from "../Modals/Login/Login.component";

export const NavBarComponent: React.FC<NavBarProps> = () => {
  const modal = useModal();

  return (
    <nav className={styles.container}>
      <div className={styles.subcontainer_left}>
        <Link href="/" className={styles.title}>
          OverThinker
        </Link>
        <Search />
      </div>
      <button onClick={() => modal?.openModal(<LoginComponent />)}>
        Sign In
      </button>
    </nav>
  );
};
