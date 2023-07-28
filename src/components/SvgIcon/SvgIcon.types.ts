export enum IconsEnum {
  search = '/icons/search.svg',
}

export interface SvgIconProps {
  src: IconsEnum | string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: any) => void;
  role?: string;
  alt: string
  height?: number;
  width?: number;
}

