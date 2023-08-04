import { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import styles from "./UserMenu.module.scss";
import { IconsEnum, ImagesEnum } from "@/common/constants";
import useOnClickOutside from "@/hooks/useOnClickOutside";

export const UserMenuComponent = () => {
  const { data: session, status } = useSession();
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const exRef = useRef<HTMLDivElement>(null);
  const handler = () => setOpen(false);
  useOnClickOutside({ ref, exRef, handler });

  return (
    <div className={styles.container}>
      <div
        className={styles.icons}
        onClick={() => setOpen((prev) => !prev)}
        ref={exRef}
      >
        <Image
          src={session?.user.avatarUrl || ImagesEnum.user}
          alt="user_icon"
          width={38}
          height={38}
          priority
        />
        <Image
          src={IconsEnum.downArrow}
          alt="arror_down"
          width={10}
          height={10}
          priority
        />
      </div>
      {isOpen && <div className={styles.menu} ref={ref}>test</div>}
    </div>
  );
};
