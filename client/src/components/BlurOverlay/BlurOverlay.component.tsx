import React from "react";
import { BlurOverlayProps } from "./BlurOverlay.types";
import styles from "./BlurOverlay.module.scss";
import Image from "next/image";
import cn from "classnames";

export const BlurOverlayComponent: React.FC<BlurOverlayProps> = ({
  children,
  className,
  style,
  onClick,
  blur = true,
  background,
  backgroundImage,
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
      {backgroundImage && (
        <Image
          priority={true}
          src={backgroundImage!}
          alt="overlay"
          fill={true}
          className={styles.bg_image}
        />
      )}
      {children}
    </div>
  );
};
