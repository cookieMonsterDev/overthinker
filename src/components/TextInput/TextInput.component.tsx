import { useRef, useState } from "react";
import { InputProps } from "./TextInput.types";
import styles from "./TextInput.module.scss";
import cn from "classnames";
import useOnClickOutside from "@/hooks/useOnClickOutside";

export const TextInputComponent: React.FC<InputProps> = ({
  id,
  name,
  value,
  type = "text",
  placeholder,
  helperText,
  style,
  error = false,
  className,
  icon,
  ref,
  onChange,
}) => {
  const valueRef = useRef<any | null>(null);
  const containerRef = useRef<HTMLInputElement | null>(null);
  const [focus, setFocus] = useState(false);

  const InputClass = cn(
    styles.input,
    {
      [styles[`input_focus`]]: focus,
      [styles[`input_active`]]: valueRef.current || focus || value,
      [styles[`input_helperText`]]: helperText,
      [styles[`input_error`]]: error,
      [styles[`input_icon`]]: type === "password",
    },
    className
  );

  const handleChenge = (event: React.ChangeEvent<HTMLInputElement>) => {
    valueRef.current = event.target.value;
    onChange && onChange(event);
  };

  useOnClickOutside(containerRef, () => setFocus(false));

  return (
    <div
      className={InputClass}
      style={style}
      onClick={() => setFocus(true)}
      ref={containerRef}
    >
      <input
        id={id}
        name={name}
        onChange={handleChenge}
        value={value}
        ref={ref}
        type={type}
      />
      {icon && <span className={styles.icon}>{icon}</span>}
      {placeholder && <label className={styles.label}>{placeholder}</label>}
      {helperText && <label className={styles.helperText}>{helperText}</label>}
    </div>
  );
};
