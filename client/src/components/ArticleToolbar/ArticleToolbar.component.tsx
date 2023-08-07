"use client";
import React from "react";
import styles from "./ArticleToolbar.module.scss";
import { ArticleToolbarProps } from "./ArticleToolbar.types";
import { SvgIcon } from "../SvgIcon";
import { IconsEnum } from "@/common/constants";
import { Tooltip } from "react-tooltip";
import cn from 'classnames'

export const ArticleToolbarComponent: React.FC<ArticleToolbarProps> = ({
  likes,
  comments,
  bookmark = false,
  className
}) => {
  const cont = cn(styles.container, className)

  return (
    <div className={cont}>
      <section className={styles.left_container}>
        <span
          data-tooltip-id="article-toolbar-tooltip"
          data-tooltip-content="Like"
          data-tooltip-place="top"
        >
          <SvgIcon src={IconsEnum.like} className={styles.svg_with_data} />
          {comments && <p>{comments}</p>}
        </span>
        <span
          data-tooltip-id="article-toolbar-tooltip"
          data-tooltip-content="Comments"
          data-tooltip-place="top"
        >
          <SvgIcon src={IconsEnum.comments} className={styles.svg_with_data} />
          {likes && <p>{likes}</p>}
        </span>
      </section>
      <section className={styles.right_container}>
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
