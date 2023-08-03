"use client";
import { TextInput } from "@/components/TextInput";
import { Button } from "@/components/Button";
import styles from "./RegisterPage.module.scss";
import default_styles from "../auth.module.scss";
import { SvgIcon } from "@/components/SvgIcon";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IconsEnum } from "@/common/constants";

const RegisterPage = () => {
  const router = useRouter();

  return (
    <dialog open className={styles.container}>
      <Link href="/" className={default_styles.close_button}>
        <SvgIcon src={IconsEnum.close} />
      </Link>
      <h1 className={default_styles.title}>Join OverThinker</h1>
      <form className={styles.form}>
        <TextInput />
        <TextInput />
        <Button
          className={styles.register_button}
          variant="default"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Sign up
        </Button>
      </form>
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
