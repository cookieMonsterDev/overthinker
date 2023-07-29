export interface BlurOverlayProps {
  blur?: boolean;
  background?: React.CSSProperties['background'];
  backgroundImage?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: any) => void;
}
