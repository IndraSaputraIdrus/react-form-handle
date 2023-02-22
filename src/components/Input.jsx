import { useState } from "react";
import "./Input.css";

export default function Input(props) {
  const [focus, setFocus] = useState(false);
  const handleFocus = () => {
    setFocus(true);
  };
  return (
    <div className="form__group">
      <label htmlFor={props.id} className="form__label">
        {props.label}
      </label>
      <input
        {...props}
        onBlur={handleFocus}
        focused={focus.toString()}
        onFocus={() => props.id === "confirmPassword" && setFocus(true)}
        onChange={props.onChange}
        id={props.id}
        name={props.id}
        className="form__input"
        placeholder={props.placeholder}
        type={props.type}
      />
      <span className="form__error">{props.errorMessage}</span>
    </div>
  );
}
