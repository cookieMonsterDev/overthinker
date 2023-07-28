export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
  role?: string;
  onClick?: (e: any) => void;
  children?: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
  rounded?: "none" | "small" | "medium"; 
}
