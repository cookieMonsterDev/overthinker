import { useRef } from "react";
import { BlurOverlay } from "@/components/BlurOverlay";
import { TextInput } from "@/components/TextInput";
import { useModal } from "@/context/ModalProvider";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import styles from "./Login.module.scss";
import default_styles from '../modals.module.scss'
import { Button } from "@/components/Button";
import { RegisterComponent } from "../Register/Register.component";
import { IconsEnum, SvgIcon } from "@/components/SvgIcon";

export const LoginComponent = () => {
  const modal = useModal();
  const ref = useRef<HTMLDialogElement>(null);
  useOnClickOutside(ref, () => modal?.closeModal());

  return (
    <BlurOverlay>
      <dialog open ref={ref} className={styles.container}>
        <div className={default_styles.close_button}>
          <SvgIcon src={IconsEnum.close} onClick={() => modal?.closeModal()}/>
        </div>
        <h1 className={default_styles.title}>Welcom back</h1>
        <form className={styles.form}>
          <TextInput />
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
          </Button>
        </form>
        <p>
          No account?
          <Button
            className={styles.redirect_button}
            onClick={() => modal?.openModal(<RegisterComponent />)}
          >
            Create one
          </Button>
        </p>
      </dialog>
    </BlurOverlay>
  );
};
