import React from "react";
import { RadioButtonProps } from "./RadioButton.types";

const RadioButton: React.FC<RadioButtonProps> = ({ label, ...rest }) => (
  <label style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
    <input data-testid="radio-button" type="radio" {...rest} />
    {label && <span>{label}</span>}
  </label>
);

export default RadioButton;
