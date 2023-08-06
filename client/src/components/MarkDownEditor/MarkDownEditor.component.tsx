import { MarkDownEditorProps } from "./MarkDownEditor.types";
import "@uiw/react-md-editor/markdown-editor.css";
import styles from "./MarkDownEditor.module.scss";
import MDEditor from "@uiw/react-md-editor";
import cn from "classnames";

export const MarkDownEditorComponent: React.FC<MarkDownEditorProps> = ({
  value,
  className,
  style,
  onChange,
  error,
  height,
}) => {

  const editor = cn(styles.editor, {
    [styles[`editor_error`]]: error,
  }, className);

  return (
    <div data-color-mode="light" className={editor}>
      <MDEditor value={value} onChange={onChange} height={height} style={style} />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
