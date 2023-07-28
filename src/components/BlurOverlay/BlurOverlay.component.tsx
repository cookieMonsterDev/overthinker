import React from "react";
import { BlurOverlayProps } from "./BlurOverlay.types";

export const BlurOverlayComponent: React.FC<BlurOverlayProps> = ({
  children,
}) => {
  return (
    <div style={{ background: "red", width: "100vw", height: "100vh" }}>
      {children}
    </div>
  );
};
