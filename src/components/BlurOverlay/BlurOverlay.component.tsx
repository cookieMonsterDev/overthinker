import React from "react";
import { BlurOverlayProps } from "./BlurOverlay.types";
import styles from "./BlurOverlay.module.scss";
import cn from "classnames";

export const BlurOverlayComponent: React.FC<BlurOverlayProps> = ({
  children,
  className,
  style,
  onClick,
  blur = true,
  background = "rgba(255, 255, 255, 0.4)",
}) => {
  const overlay = cn(
    styles.overlay,
    {
      [styles[`overlay_blur`]]: blur,
    },
    className
  );

  const inlineStyle = {
    ...style,
    background: background,
  };

  return (
    <div
      className={overlay}
      style={inlineStyle}
      role="wrapper"
      onClick={onClick}
    >
      {children}
    </div>
  );
};
