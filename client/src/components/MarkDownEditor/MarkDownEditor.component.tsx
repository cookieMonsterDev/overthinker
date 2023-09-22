import { MarkDownEditorProps } from "./MarkDownEditor.types";
import "@uiw/react-md-editor/markdown-editor.css";
import MDEditor from "@uiw/react-md-editor";
import cn from "classnames";

export const MarkDownEditorComponent: React.FC<MarkDownEditorProps> = ({
  value,
  className,
  style,
  onChangeEditor,
  error,
  height,
}) => {
  const editor = cn(
    "relative",
    {
      "rounded-[2px] border-2 border-error outline-2 outline-error": error,
    },
    className
  );

  return (
    <div data-color-mode="light" className={editor}>
      <MDEditor
        value={value}
        onChange={onChangeEditor}
        height={height}
        style={style}
      />
      {error && (
        <span className="max-w-full block overflow-hidden text-ellipsis absolute bottom-[-1.7rem] left-[0.6rem] text-error text-[1.1rem]">
          {error}
        </span>
      )}
    </div>
  );
};
