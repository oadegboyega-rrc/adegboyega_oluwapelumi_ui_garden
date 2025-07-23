import React from "react";
import { TableRowProps } from "./Table.types";

const TableRow: React.FC<TableRowProps> = ({ children, ...rest }) => (
  <tr data-testid="table-row" {...rest}>
    {children}
  </tr>
);

export default TableRow;
