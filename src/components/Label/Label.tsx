import React from "react";
import { LabelProps } from "./Label.types";

const Label: React.FC<LabelProps> = ({ text, disabled, ...rest }) => (
  <label
    data-testid="label"
    style={{ color: disabled ? "#999" : "#000" }}
    {...rest}
  >
    {text}
  </label>
);

export default Label;
