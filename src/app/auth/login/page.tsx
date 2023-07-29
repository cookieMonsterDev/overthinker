"use client";
import { TextInput } from "@/components/TextInput";
import styles from "./LoginPage.module.scss";
import default_styles from "../auth.module.scss";
import { Button } from "@/components/Button";
import { SvgIcon } from "@/components/SvgIcon";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IconsEnum } from "@/common/constants";

const LoginPage = () => {
  const router = useRouter();

  return (
    <dialog open className={styles.container}>
      <Link href="/" className={default_styles.close_button}>
        <SvgIcon src={IconsEnum.close} />
      </Link>
      <h1 className={default_styles.title}>Welcom back</h1>
      <form className={styles.form}>
        {/* <TextInput />
        <TextInput />
        <Button
          className={styles.login_button}
          variant="default"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Sign in
        </Button> */}
      </form>
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
