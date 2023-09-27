import React from "react";
import { CommentProps } from "./Comments.types";
import { ImagesEnum } from "@/common/constants";
import Image from "next/image";
import Link from "next/link";
import { dateTimeFormater } from "@/utils/dateTimeFormater";

export const CommentComponent: React.FC<CommentProps> = ({
  _id,
  user,
  text,
  createdAt,
  updatedAt,
}) => {
  return (
    <li className="flex items-start">
      <Link href={`/${user.username}`}>
        <Image
          src={user.avatarUrl || ImagesEnum.user}
          width={40}
          height={40}
          priority
          alt="write_icon"
          className="rounded-full border border-border mr-4"
        />
      </Link>
      <div className="flex flex-col w-full">
        <div className="flex justify-start gap-2">
          <Link
            href={`/${user.username}`}
            className="font-bold duration-300 hover:underline"
          >
            @{user.username}
          </Link>
          <span className="text-light_primary">
            {dateTimeFormater(new Date(createdAt))}
          </span>
        </div>
        <p className="w-full h-auto">{text}</p>
      </div>
    </li>
  );
};
