"use client";
import React from "react";
import { NavBarProps } from "./NavBar.types";
import styles from "./NavBar.module.scss";
import Link from "next/link";
import { Search } from "../Search";
import { useModal } from "@/context/ModalProvider";
import { Button } from "../Button";
import { IconsEnum, SvgIcon } from "../SvgIcon";
import { RegisterComponent } from "../Modals/Register/Register.component";

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
        <Link href="/new-article" className={styles.write_button_container}>
          <SvgIcon src={IconsEnum.write} size={34} />
          <span>Write</span>
        </Link>
        <Button
          className={styles.button}
          variant="success"
          onClick={() => modal?.openModal(<RegisterComponent />)}
        >
          Sign up
        </Button>
        <Button
          className={styles.button}
          variant="text"
          onClick={() => modal?.openModal()}
        >
          Sign in
        </Button>
      </div>
    </nav>
  );
};
