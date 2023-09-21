import React from "react";
import { BlurOverlayProps } from "./BlurOverlay.types";
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
    "min-h-screen min-w-full absolute inset-0 flex justify-center items-center",
    {
      "backdrop-blur-sm": blur,
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
          className="absolute bg-center w-full h-full blur-sm"
        />
      )}
      {children}
    </div>
  );
};
