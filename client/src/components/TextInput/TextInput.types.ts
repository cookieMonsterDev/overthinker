import { IconsEnum } from "@/common/constants";

export interface InputProps {
  id?: string;
  name?: string;
  value?: any;
  type?: 'text' | 'password' | string;
  placeholder?: string;
  label?: string;
  error?: string;
  className?: string;
  style?: React.CSSProperties;
  withAnimation?: boolean;
  icon?: IconsEnum | string;
  iconClassName?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  onIconClick?: (event: any) => void | undefined;
}