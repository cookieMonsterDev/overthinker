import { useRef, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import styles from "./UserMenu.module.scss";
import { IconsEnum, ImagesEnum } from "@/common/constants";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import Link from "next/link";
import { SvgIcon } from "../SvgIcon";

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
      {isOpen && (
        <div className={styles.menu} ref={ref} aria-hidden={isOpen}>
          {!session ? (
            <>
              <div className={styles.auth_section}>
                <h1>Get started on OverThinker</h1>
                <Link href="/auth/register">Sign up</Link>
                <Link href="/auth/login">Sign in</Link>
              </div>
              <div className={styles.no_auth_list}>
                <Link href="/about">About</Link>
                <Link href="/terms">Terms</Link>
                <Link href="/help">Help</Link>
              </div>
            </>
          ) : (
            <>
              <div className={styles.auth_list} aria-hidden={isOpen}>
                <Link href="/profile">
                  <SvgIcon src={IconsEnum.profile} size={32} />
                  <span>Profile</span>
                </Link>
                <Link href="/library">
                  <SvgIcon src={IconsEnum.bookmarks} size={32} />
                  <span>Library</span>
                </Link>
              </div>
              <div className={styles.signout_section} onClick={() => signOut()}>
                <p>Sign out</p>
                <p>{session.user.email}</p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
