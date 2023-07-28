export interface InputProps {
  id?: string;
  name?: string;
  value?: any;
  type?: 'text' | 'password';
  placeholder?: string;
  helperText?: string;
  error?: boolean;
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  ref?: React.MutableRefObject<HTMLInputElement | null>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
}