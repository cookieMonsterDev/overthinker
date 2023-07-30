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
}) => {
  const contClass = cn(
    styles.container,
    {
      [styles[`container_error`]]: error,
    },
    className
  );

  const inputClass = cn(styles.input, {
    [styles[`input_error`]]: error,
  });

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
        <SvgIcon src={icon} className={styles.icon} onClick={onIconClick} />
      )}
    </div>
  );
};
