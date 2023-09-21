import { HTMLAttributes } from "react";

export interface BlurOverlayProps extends HTMLAttributes<HTMLDivElement> {
  blur?: boolean;
  background?: React.CSSProperties["background"];
  backgroundImage?: string;
  children: React.ReactNode;
}
