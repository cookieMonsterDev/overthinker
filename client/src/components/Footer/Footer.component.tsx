import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";

export const FooterComponent = () => {
  return (
    <footer className={styles.container}>
      <Link href="/about">About</Link>
      <Link href="/terms">Terms</Link>
      <Link href="/help">Help</Link>
    </footer>
  );
};
