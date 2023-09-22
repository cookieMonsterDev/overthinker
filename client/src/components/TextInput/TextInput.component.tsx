import { InputProps } from "./TextInput.types";
import cn from "classnames";
import { SvgIcon } from "../SvgIcon";

export const TextInputComponent: React.FC<InputProps> = ({
  id,
  name,
  value,
  type = "text",
  placeholder,
  label,
  style,
  error,
  className,
  icon,
  onChange,
  onIconClick,
  iconClassName,
  withAnimation = true,
}) => {
  const contClass = cn(
    "relative flex w-full my-4 p-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-black",
    {
      "before:bg-error": Boolean(error),
      "before:bg-error before:animate-horizontal-shaking":
        Boolean(error) && withAnimation,
    },
    className
  );

  const inputClass = cn("w-full flex relative text-2xl outline-none", {
    "animate-horizontal-shaking": withAnimation && Boolean(error),
    "pr-8": icon,
  });

  const iconClass = cn("absolute right-0 cursor-pointer", iconClassName);

  return (
    <div style={style} className={contClass}>
      {label && (
        <label className="absolute top-[-1.1rem] text-[1.1rem] max-w-full block overflow-hidden text-ellipsis">
          {label}
        </label>
      )}
      <input
        placeholder={placeholder}
        id={id}
        value={value}
        name={name}
        type={type}
        onChange={onChange}
        className={inputClass}
      />
      {error && (
        <span className="absolute bottom-[-1.6rem] text-error text-[1.1rem] max-w-full block overflow-hidden text-ellipsis">
          {error}
        </span>
      )}
      {icon && (
        <SvgIcon
          src={icon}
          onClick={onIconClick}
          size={30}
          className={iconClass}
        />
      )}
    </div>
  );
};
