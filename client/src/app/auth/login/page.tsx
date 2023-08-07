"use client";
import default_styles from "../auth.module.scss";
import { SvgIcon } from "@/components/SvgIcon";
import { IconsEnum } from "@/common/constants";
import { LoginForm } from "@/components/Forms";
import styles from "./LoginPage.module.scss";
import Link from "next/link";

const LoginPage = () => {
  return (
    <dialog open className={styles.container}>
      <Link href="/" className={default_styles.close_button}>
        <SvgIcon src={IconsEnum.close} />
      </Link>
      <h1 className={default_styles.title}>Welcom back</h1>
      <LoginForm />
      <p>
        No account?
        <Link href="/auth/register" className={styles.redirect_button}>
          Create one
        </Link>
      </p>
    </dialog>
  );
};

export default LoginPage;
