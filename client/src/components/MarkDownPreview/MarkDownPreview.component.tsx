"use client";
import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { MarkDownPreviewProps } from "./MarkDownPreview.types";

export const MarkDownPreviewComponent: React.FC<MarkDownPreviewProps> = ({
  source,
  className,
  style,
}) => {
  return (
    <div data-color-mode="light">
      <MarkdownPreview source={source} className={className} style={style} />
    </div>
  );
};
