export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
  role?: string;
  onClick?: (e: any) => void;
  children?: React.ReactNode;
  variant?: "default" | "success" | "error" | "outlined" | "text";
  isLoading?: boolean;
  disabled?: boolean;
  loaderSize?: number;
  loaderColor?: string;
}
