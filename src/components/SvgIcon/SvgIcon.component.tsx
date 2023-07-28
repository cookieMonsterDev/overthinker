import React from "react";
import { SvgIconProps } from "./SvgIcon.types";
import Image from "next/image";
import styles from "./SvgIcon.module.scss";
import cn from "classnames";

export const SvgIconComponent: React.FC<SvgIconProps> = ({
  src,
  className,
  style,
  onClick,
  role,
  alt,
  height = 32,
  width = 32,
}) => {
  const svgIconClass = cn(styles.svgIcon, className);

  return (
    <Image
      priority
      src={src}
      className={svgIconClass}
      height={height}
      width={width}
      role={role}
      alt={alt}
      style={style}
      onClick={onClick}
    />
  );
};
