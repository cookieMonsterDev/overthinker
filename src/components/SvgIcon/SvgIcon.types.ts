export enum IconsEnum {
  search = '/icons/search.svg',
  loader = '/icons/loader.svg',
  write = '/icons/write.svg',
  close = '/icons/close.svg'
}

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
}

