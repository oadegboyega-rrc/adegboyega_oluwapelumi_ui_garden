import React from "react";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({ text, disabled, ...rest }) => {
  return (
    <button
      data-testid="Button"
      disabled={disabled}
      style={{ color: disabled ? "#999" : "#000" }}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
