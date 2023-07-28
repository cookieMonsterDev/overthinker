"use client";
import React from "react";
import { NavBarProps } from "./NavBar.types";
import styles from "./NavBar.module.scss";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Search } from "../Search";
import { useModal } from "@/context/ModalProvider";
import { BlurOverlay } from "../BlurOverlay";

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
      <button
        onClick={() =>
          modal?.openModal(
            <BlurOverlay>
              <dialog open>
                <h1>test Moadal</h1>
                <button onClick={() => modal.closeModal()}>Close</button>
              </dialog>
            </BlurOverlay>
          )
        }
      >
        Sign In
      </button>
    </nav>
  );
};
