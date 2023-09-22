import { useRef, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { IconsEnum, ImagesEnum } from "@/common/constants";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import Link from "next/link";
import { SvgIcon } from "../SvgIcon";

export const UserMenuComponent = () => {
  const { data: session } = useSession();
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const exRef = useRef<HTMLDivElement>(null);
  const handler = () => setOpen(false);
  useOnClickOutside({ ref, exRef, handler });

  return (
    <div className="relative px-4 py-2">
      <div
        className="cursor-pointer flex justify-center items-center"
        onClick={() => setOpen((prev) => !prev)}
        ref={exRef}
      >
        <Image
          src={session?.user.avatarUrl || ImagesEnum.user}
          alt="user_icon"
          width={38}
          height={38}
          priority
          className="rounded-full"
        />
        <Image
          className="ml-2 fill-[rgb(107, 107, 107]"
          src={IconsEnum.downArrow}
          alt="arror_down"
          width={10}
          height={10}
          priority
        />
      </div>
      {isOpen && (
        <div
          className="absolute z-10 right-0 top-full p-4 min-w-[20rem] bg-secondary shadow-md"
          ref={ref}
          aria-hidden={isOpen}
        >
          {!session ? (
            <>
              <div className="p-4 flex flex-col items-center justify-center gap-4">
                <h1 className="text-[1.2rem] font-bold mb-2">
                  Get started on OverThinker
                </h1>
                <Link
                  className="w-full justify-center items-center inline-flex px-4 py-[0.6rem] text-[1.1rem] rounded-[2rem] cursor-pointer bg-success text-secondary duration-300 hover:bg-dark_success active:bg-dark_success"
                  href="/auth/register"
                  onClick={() => setOpen(false)}
                >
                  Sign up
                </Link>
                <Link
                  className="w-full justify-center items-center inline-flex px-4 py-[0.6rem] text-[1.1rem] rounded-[2rem] cursor-pointer bg-transparent text-primary border border-primary duration-300 hover:bg-ultra_light_primary active:bg-ultra_light_primary"
                  href="/auth/login"
                  onClick={() => setOpen(false)}
                >
                  Sign in
                </Link>
              </div>
              <div className="flex flex-col p-4 gap-4 border-t border-t-[rgb(204, 204, 204)] duration-300">
                <Link
                  className="text-[1.2rem] font-semibold text-[rgba(0, 0, 0, 0.6)] hover:text-primary"
                  href="/about"
                  onClick={() => setOpen(false)}
                >
                  About
                </Link>
                <Link
                  className="text-[1.2rem] font-semibold text-[rgba(0, 0, 0, 0.6)] hover:text-primary"
                  href="/terms"
                  onClick={() => setOpen(false)}
                >
                  Terms
                </Link>
                <Link
                  className="text-[1.2rem] font-semibold text-[rgba(0, 0, 0, 0.6)] hover:text-primary"
                  href="/help"
                  onClick={() => setOpen(false)}
                >
                  Help
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col p-4 gap-4" aria-hidden={isOpen}>
                <Link
                  className="flex items-center"
                  href="/profile"
                  onClick={() => setOpen(false)}
                >
                  <SvgIcon
                    className="stroke-[rgba(0, 0, 0, 0.6)] duration-300"
                    src={IconsEnum.profile}
                    size={32}
                  />
                  <span className="ml-4 text-[1.2rem] font-normal text-[rgba(0, 0, 0, 0.6)]">
                    Profile
                  </span>
                </Link>
                <Link
                  className="flex items-center"
                  href="/library"
                  onClick={() => setOpen(false)}
                >
                  <SvgIcon
                    src={IconsEnum.bookmarks}
                    size={32}
                    className="stroke-[rgba(0, 0, 0, 0.6)] duration-300"
                  />
                  <span className="ml-4 text-[1.2rem] font-normal text-[rgba(0, 0, 0, 0.6)]">
                    Library
                  </span>
                </Link>
              </div>
              <div
                className="p-4 cursor-pointer flex flex-col font-normal text-[rgba(0, 0, 0, 0.6)] border-t border-t-border duration-300 hover:text-primary"
                onClick={() => signOut()}
              >
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
