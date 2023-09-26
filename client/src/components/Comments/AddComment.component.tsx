import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { AddCommentProps } from "./Comments.types";
import { Button } from "../Button";

const AddComment: React.FC<AddCommentProps> = ({ avatar }) => {
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleComment = () => {
    if (!text) return;
    console.log(text);

    setText("");
  };

  return (
    <div className="flex items-start">
      <Image
        src={avatar}
        width={40}
        height={40}
        priority
        alt="write_icon"
        className="rounded-full border border-border mr-6"
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
