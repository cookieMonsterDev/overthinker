import { ButtonProps } from "./Button.types";
import cn from "classnames";
import styles from "./Button.module.scss";
import { SvgIcon } from "../SvgIcon";
import { IconsEnum } from "@/common/constants";

export const ButtonComponent: React.FC<ButtonProps> = ({
  className,
  style,
  type = "button",
  role = "button",
  onClick,
  children,
  variant = "contained",
  isLoading = false,
  disabled = false,
  loaderSize = 40,
  loaderColor,
}) => {
  const buttonClass = cn(
    styles.button,
    {
      [styles[`button_variant_${variant}`]]: variant,
      [styles.disabled]: disabled,
    },
    className
  );

  const handleClick = (e: any) => !disabled && onClick && onClick(e);

  return isLoading ? (
    <SvgIcon
      src={IconsEnum.loader}
      className={styles.loader}
      size={loaderSize}
      color={loaderColor}
    />
  ) : (
    <button
      className={buttonClass}
      style={style}
      type={type}
      role={role}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
