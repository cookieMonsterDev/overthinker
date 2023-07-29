"use client";
import React from "react";
import { NavBarProps } from "./NavBar.types";
import styles from "./NavBar.module.scss";
import Link from "next/link";
import { Search } from "../Search";
import { useModal } from "@/context/ModalProvider";
import { LoginComponent } from "../Modals/Login/Login.component";
import { Button } from "../Button";

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
      <div className={styles.subcontainer_right}>
        <Link href="/new-article">test</Link>
        <Button
          className={styles.button}
          variant="success"
          onClick={() => modal?.openModal(<LoginComponent />)}
        >
          Sign up
        </Button>
        <Button
          className={styles.button}
          variant="text"
          onClick={() => modal?.openModal()}
        >
          Sign up
        </Button>
      </div>
    </nav>
  );
};
