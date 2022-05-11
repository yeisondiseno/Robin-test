import { useState } from "react";
import "./input.scss";

const Input = (props) => {
  const {
    label,
    value,
    name,
    errors,
    register,
    change,
    autoComplete,
    id,
    disabled = false,
    type,
    blurEvent,
    placeholder = " ",
    onKeyDown,
    testId,
    classes,
    icon,
    min,
    max,
    required,
  } = props;

  const [fieldActive, setFieldActive] = useState(false);

  const activateField = () => {
    setFieldActive(true);
  };

  const disableFocus = (e) => {
    e.target.value === "" && setFieldActive(false);
  };

  return (
    <div
      className={`
        a-input-group
        ${errors && errors[name] ? "error " : ""}
        ${classes || ""}
      `}
    >
      <label
        className={`
          a-input-label
          ${
            placeholder !== " " ||
            (typeof value !== "undefined" && value !== "") ||
            fieldActive
              ? "active "
              : ""
          }
          ${errors && errors[name] ? "error " : ""}
        `}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        data-testid={testId}
        className={
          "a-input " +
          (placeholder !== " " || fieldActive ? "active " : "") +
          (errors && errors[name] ? "error " : "") +
          (disabled ? "disabled" : "")
        }
        id={id}
        autoComplete={autoComplete ? "on" : "off"}
        onChange={change}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        name={name}
        value={value}
        type={type}
        onBlur={(e) => {
          disableFocus(e);
          blurEvent && blurEvent();
        }}
        onFocus={activateField}
        min={min}
        max={max}
        {...register(name, {
          required: { value: required, message: "Este campo es requerido." },
        })}
      />
      {icon && <span className="a-input__icon">{icon}</span>}
      {errors && errors[name] && (
        <span className="a-input-error">{errors[name].message}</span>
      )}
    </div>
  );
};

export default Input;
