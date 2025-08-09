import React from "react";
import { TextProps } from "./Text.types";

const Text: React.FC<TextProps> = ({ children, ...rest }) => (
  <span data-testid="text" {...rest}>
    {children}
  </span>
);

export default Text;
