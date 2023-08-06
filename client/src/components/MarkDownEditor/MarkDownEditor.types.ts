export interface MarkDownEditorProps {
  value?: string;
  error?: string;
  className?: string;
  style?: React.CSSProperties;
  onChange: (value?: string | undefined) => void;
  height?: any;
}
