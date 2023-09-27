import { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import { AddCommentProps } from "./Comments.types";
import { Button } from "../Button";
import { ImagesEnum } from "@/common/constants";
import useSocket from "@/hooks/useSocket";
import { ManagerOptions } from "socket.io-client";

const AddComment: React.FC<AddCommentProps> = ({
  avatarUrl,
  articleId,
  authorId,
}) => {
  const [text, setText] = useState("");
  const socket = useSocket({url: "http://localhost:81", rooms: articleId});

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleComment = () => {
    if (!text) return;

    socket?.emit("message", { author: authorId, article: articleId, text });

    setText("");
  };

  useEffect(() => {
    socket?.on("message", (e) => console.log(e));

    return () => {
      socket?.off("message", (e) => console.log(e));
    };
  }, [socket]);

  return (
    <div className="flex items-start">
      <Image
        src={avatarUrl || ImagesEnum.user}
        width={40}
        height={40}
        priority
        alt="write_icon"
        className="rounded-full border border-border mr-4"
      />
      <div className="flex flex-col w-full">
        <textarea
          placeholder="Add a comment..."
          value={text}
          onChange={handleChange}
          className="mb-2 outline-none border-b border-border overflow-hidden resize-none"
          rows={1}
        />
        <Button variant="default" className="self-end" onClick={handleComment}>
          Comment
        </Button>
      </div>
    </div>
  );
};

export default AddComment;
