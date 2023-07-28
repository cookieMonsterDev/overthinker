import { ButtonProps } from "./Button.types";
import cn from "classnames";
import styles from "./Button.module.scss";

export const ButtonComponent: React.FC<ButtonProps> = ({
  className,
  style,
  type = "button",
  role = "button",
  onClick,
  children,
  variant = "contained",
  rounded = "small",
}) => {
  
  const buttonClass = cn(styles.button, {
    [styles[`button_variant_${variant}`]]: variant,
    [styles[`button_rounded_${rounded}`]]: rounded,
  }, className);

  return (
    <button
      className={buttonClass}
      style={style}
      type={type}
      role={role}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
