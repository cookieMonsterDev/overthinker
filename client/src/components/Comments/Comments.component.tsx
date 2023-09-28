"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { ImagesEnum } from "@/common/constants";
import AddComment from "./AddComment.component";
import { CommentsProps } from "./Comments.types";
import { CommentComponent } from "./Comment.component";
import useSocket from "@/hooks/useSocket";
import { CommentResponse } from "@/services/comments/types";

export const CommentsComponent: React.FC<CommentsProps> = ({
  comments,
  articleId,
}) => {
  const { data: session } = useSession();
  const [localComments, setLocalComments] = useState(comments);
  const socket = useSocket({ url: "http://localhost:81", rooms: articleId });

  useEffect(() => {
    const handleCommentsUpdate = (comment: CommentResponse) => {
      console.log(comment)
      setLocalComments((prev) => {
        console.log({ ...prev, data: [comment, ...prev.data] })
        return { ...prev, data: [comment, ...prev.data] };
      });
    };

    socket?.on("message", handleCommentsUpdate);

    return () => {
      socket?.off("message", handleCommentsUpdate);
    };
  }, [socket]);

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
          socket={socket}
        />
      )}
      {localComments.data.length > 0 ? (
        <ul className="flex flex-col list-none gap-8">
          {localComments.data.map((e) => (
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
