import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "default" | "success" | "error" | "outlined" | "text";
  isLoading?: boolean;
  loaderSize?: number;
  loaderColor?: string;
}
