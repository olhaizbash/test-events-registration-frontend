import { InputCSS, Span } from "./Register.styled";
import { useState } from "react";

const Input = ({ label, onChange, id, value, error, ...props }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="wrapper-input">
      <label htmlFor={id}>{label}</label>
      <InputCSS
        id={id}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        value={value}
        {...props}
      />
      <Span>{error}</Span>
    </div>
  );
};

export default Input;
