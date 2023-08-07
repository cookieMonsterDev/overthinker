import { InputProps } from "./TextInput.types";
import styles from "./TextInput.module.scss";
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
    styles.container,
    {
      [styles[`container_error`]]: error,
      [styles["container_error_with_animation"]]: withAnimation,
    },
    className
  );

  const inputClass = cn(styles.input, {
    [styles[`input_error`]]: withAnimation && Boolean(error),
    [styles[`input_withIcon`]]: icon,
  });

  const iconClass = cn(styles.icon, iconClassName);

  return (
    <div style={style} className={contClass}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        className={inputClass}
        placeholder={placeholder}
        id={id}
        value={value}
        name={name}
        type={type}
        onChange={onChange}
      />
      {error && <span className={styles.error}>{error}</span>}
      {icon && (
        <SvgIcon
          src={icon}
          className={iconClass}
          onClick={onIconClick}
          size={30}
        />
      )}
    </div>
  );
};
