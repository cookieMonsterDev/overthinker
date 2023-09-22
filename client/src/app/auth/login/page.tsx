"use client";
import { SvgIcon } from "@/components/SvgIcon";
import { IconsEnum } from "@/common/constants";
import { LoginForm } from "@/components/Forms";
import Link from "next/link";

const LoginPage = () => {
  return (
    <dialog
      open
      className="min-h-[20rem] bg-secondary shadow-md rounded-[0.3rem] p-14 relative flex flex-col justify-center items-center gap-4 animate-fade-cubic outline-none"
    >
      <Link href="/" className="cursor-pointer absolute top-4 right-4">
        <SvgIcon
          src={IconsEnum.close}
          className="stroke-none fill-[rgba(0, 0, 0, 0.3)] hover:fill-[rgba(0, 0, 0, 1)] hover:duration-300"
        />
      </Link>
      <h1 className="font-chomsky text-[4rem] font-medium mt-4 mb-8">
        Welcom back
      </h1>
      <LoginForm />
      <p>
        No account?
        <Link
          href="/auth/register"
          className="text-light_success p-[0.2rem] font-bold"
        >
          Create one
        </Link>
      </p>
    </dialog>
  );
};

export default LoginPage;
