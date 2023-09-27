"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { ImagesEnum } from "@/common/constants";
import AddComment from "./AddComment.component";
import { CommentsProps } from "./Comments.types";
import { CommentComponent } from "./Comment.component";

export const CommentsComponent: React.FC<CommentsProps> = ({
  comments,
  articleId,
}) => {
  const { data: session } = useSession();

  return (
    <section>
      <h3 className="mb-6 text-xl font-semibold">Comments:</h3>
      {!session ? (
        <Link href="/auth/login" className="flex items-start">
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
        <AddComment
          avatarUrl={session.user.avatarUrl}
          authorId={session.user._id}
          articleId={articleId}
        />
      )}
      {comments ? (
        <ul className="flex flex-col list-none gap-8">
          {comments.map((e) => (
            <CommentComponent key={e._id} {...e} />
          ))}
        </ul>
      ) : (
        <div className="flex justify-center py-8">
          <p className="text-light_primary">No comments yet.</p>
        </div>
      )}
    </section>
  );
};
