import React from "react";
import { TableCellProps } from "./Table.types";

const TableCell: React.FC<TableCellProps> = ({ children, ...rest }) => (
  <td data-testid="table-cell" {...rest}>
    {children}
  </td>
);

export default TableCell;
