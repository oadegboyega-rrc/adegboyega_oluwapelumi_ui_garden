import React from "react";
import { DropdownProps } from "./Dropdown.types";

const Dropdown: React.FC<DropdownProps> = ({ options, ...rest }) => (
  <select data-testid="dropdown" {...rest}>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default Dropdown;
