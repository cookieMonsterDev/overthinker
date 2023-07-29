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
      <Button variant='default' disabled onClick={() => modal?.openModal(<LoginComponent />)}>
        Sign In
      </Button>
      <Button  variant='text' isLoading={true} onClick={() => modal?.openModal(<LoginComponent />)}>
        Sign In
      </Button>
    </nav>
  );
};
