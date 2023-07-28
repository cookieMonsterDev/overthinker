import { useRef } from "react";
import { BlurOverlay } from "@/components/BlurOverlay";
import { TextInput } from "@/components/TextInput";
import { useModal } from "@/context/ModalProvider";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import styles from './Login.module.scss'

export const LoginComponent = () => {
  const modal = useModal();
  const ref = useRef<HTMLDialogElement>(null);
  useOnClickOutside(ref, () => modal?.closeModal());

  return (
    <BlurOverlay>
      <dialog open ref={ref} className={styles.container}>
        <form>
          <h1>login page</h1>
          <TextInput />
          <TextInput />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Submit
          </button>
        </form>
      </dialog>
    </BlurOverlay>
  );
};
