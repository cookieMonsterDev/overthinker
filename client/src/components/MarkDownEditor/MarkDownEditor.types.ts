import { HTMLAttributes } from "react";

export interface MarkDownEditorProps extends HTMLAttributes<HTMLDivElement> {
  value?: string;
  error?: string;
  onChangeEditor: (value?: string | undefined) => void;
  height?: any;
}
