import { IconsEnum } from "@/common/constants";

export interface SvgIconProps {
  src: IconsEnum | string;
  onClick?: (e: any) => void;
  color?: string;
  size?: number;
  rotate?: '0' | '90' | '180' | '270';
  className?: string;
  style?: React.CSSProperties;
  defaultStroke?: boolean;
  role?: string;
  type?: 'server' | 'client'
}

