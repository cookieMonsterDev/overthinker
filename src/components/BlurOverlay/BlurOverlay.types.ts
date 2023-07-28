export interface BlurOverlayProps {
  blur?: boolean;
  background?: React.CSSProperties['background'];
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: any) => void;
}
