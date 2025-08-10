import React from "react";
export interface DropdownOption {
  label: string;
  value: string;
}
export interface DropdownProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: DropdownOption[];
}
