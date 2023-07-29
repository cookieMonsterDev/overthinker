import cn from "classnames";
import { ReactSVG } from "react-svg";
import { SvgIconProps } from "./SvgIcon.types";
import styles from "./SvgIcon.module.scss";

export const SvgIconComponent: React.FC<SvgIconProps> = ({
  src,
  size = 24,
  color = "rgb(0, 0, 0)",
  rotate = "0",
  className,
  style,
  onClick,
  defaultStroke,
  role = "button",
}) => {
  const svgIconClass = cn(
    styles.svgIcon,
    {
      [styles[`svgIcon_rotate_${rotate}`]]: rotate,
      [styles.defaultStroke]: defaultStroke,
    },
    className
  );

  const stroke = defaultStroke
    ? {}
    : {
        stroke: color,
      };

  const customStyles = {
    width: `${size}px`,
    height: `${size}px`,
    ...style,
    ...stroke,
  };

  return (
    <ReactSVG
      src={src}
      className={svgIconClass}
      style={customStyles}
      onClick={onClick}
      role={role}
    />
  );
};
