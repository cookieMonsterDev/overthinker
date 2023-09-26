"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { IconsEnum, ImagesEnum } from "@/common/constants";
import AddComment from "./AddComment.component";

export const CommentsComponent = () => {
  const { data: session } = useSession();

  return (
    <section>
      <h3 className="mb-6 text-xl font-semibold">Comments:</h3>
      {!session ? (
        <Link
          href="/auth/login"
          className="flex items-start"
        >
          <Image
            src={ImagesEnum.user}
            width={40}
            height={40}
            priority
            alt="user_avatar"
            className="rounded-full border border-border mr-6"
          />
          <p className="text-light_primary border-b border-border w-full">
            Add a comment...
          </p>
        </Link>
      ) : (
        <AddComment avatar={session.user.avatarUrl || ""} />
      )}
    </section>
  );
};
