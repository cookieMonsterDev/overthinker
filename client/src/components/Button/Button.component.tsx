"use client";
import { ButtonProps } from "./Button.types";
import cn from "classnames";
import { SvgIcon } from "../SvgIcon";
import { IconsEnum } from "@/common/constants";

export const ButtonComponent: React.FC<ButtonProps> = ({
  className,
  onClick,
  children,
  variant = "text",
  isLoading = false,
  disabled = false,
  loaderSize = 40,
  loaderColor,
  ...rest
}) => {
  const buttonClass = cn(
    "relative items-center justify-center inline-flex px-4 py-2 cursor-pointer disabled:cursor-not-allowed disabled:pointer-events-none duration-300 rounded-3xl",
    {
      "bg-primary text-secondary": variant === "default",
      "bg-success text-secondary hover:bg-dark_success active:bg-dark_success":
        variant === "success",
      "bg-error text-secondary hover:bg-dark_error active:bg-dark_error":
        variant === "error",
      "bg-transparent border border-primary hover:bg-ultra_light_primary active:bg-ultra_light_primary":
        variant === "outlined",
      "bg-transparent text-primary": variant === "text",
    },
    className
  );

  const handleClick = (e: any) => !disabled && onClick && onClick(e);

  return isLoading ? (
    <SvgIcon
      src={IconsEnum.loader}
      className="animate-spin"
      size={loaderSize}
      color={loaderColor}
    />
  ) : (
    <button
      className={buttonClass}
      onClick={handleClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
