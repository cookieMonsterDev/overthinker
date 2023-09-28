import React from "react";
import { ImagesEnum } from "@/common/constants";
import Image from "next/image";
import Link from "next/link";
import { dateTimeFormater } from "@/utils/dateTimeFormater";
import { CommentResponse } from "@/services/comments/types";

export const CommentComponent: React.FC<CommentResponse> = ({
  _id,
  author,
  text,
  createdAt,
  updatedAt,
}) => {
  return (
    <li className="flex items-start">
      <Link href={`/${author.username}`}>
        <Image
          src={author.avatarUrl || ImagesEnum.user}
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
            href={`/${author.username}`}
            className="font-bold duration-300 hover:underline"
          >
            @{author.username}
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
