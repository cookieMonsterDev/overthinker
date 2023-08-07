"use client";
import { RegisterForm } from "@/components/Forms";
import default_styles from "../auth.module.scss";
import styles from "./RegisterPage.module.scss";
import { SvgIcon } from "@/components/SvgIcon";
import { IconsEnum } from "@/common/constants";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <dialog open className={styles.container}>
      <Link href="/" className={default_styles.close_button}>
        <SvgIcon src={IconsEnum.close} />
      </Link>
      <h1 className={default_styles.title}>Join OverThinker</h1>
      <RegisterForm />
      <p>
        Already have an account?
        <Link href="/auth/login" className={styles.redirect_button}>
          Sign in
        </Link>
      </p>
    </dialog>
  );
};

export default RegisterPage;
