"use client";
import React from "react";
import { ArticleToolbarProps } from "./ArticleToolbar.types";
import { SvgIcon } from "../SvgIcon";
import { IconsEnum } from "@/common/constants";
import { Tooltip } from "react-tooltip";
import cn from "classnames";

export const ArticleToolbarComponent: React.FC<ArticleToolbarProps> = ({
  likes,
  comments,
  bookmark = false,
  className,
}) => {
  const cont = cn(
    "flex items-center justify-between px-2 py-[0.7rem] border-t border-b border-border",
    className
  );

  return (
    <div className={cont}>
      <section className="flex gap-4">
        <span
          className="flex items-center cursor-pointer"
          data-tooltip-id="article-toolbar-tooltip"
          data-tooltip-content="Like"
          data-tooltip-place="top"
        >
          <SvgIcon src={IconsEnum.like} className="mr-2" />
          {comments && <p>{comments}</p>}
        </span>
        <span
          className="flex items-center cursor-pointer"
          data-tooltip-id="article-toolbar-tooltip"
          data-tooltip-content="Comments"
          data-tooltip-place="top"
        >
          <SvgIcon src={IconsEnum.comments} className="mr-2" />
          {likes && <p>{likes}</p>}
        </span>
      </section>
      <section className="flex">
        <span
          data-tooltip-id="article-toolbar-tooltip"
          data-tooltip-content={bookmark ? "Remove" : "Save"}
          data-tooltip-place="top"
        >
          <SvgIcon
            src={bookmark ? IconsEnum.bookmarkOn : IconsEnum.bookmarkOff}
          />
        </span>
      </section>
      <Tooltip id="article-toolbar-tooltip" />
    </div>
  );
};
