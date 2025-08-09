import React from "react";
import { TableProps } from "./Table.types";

const Table: React.FC<TableProps> = ({ children, ...rest }) => (
  <table data-testid="table" {...rest}>
    {children}
  </table>
);

export default Table;
