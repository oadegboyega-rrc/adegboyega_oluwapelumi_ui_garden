import React from "react";
import { TableFooterProps } from "./Table.types";

const TableFooter: React.FC<TableFooterProps> = ({ children, ...rest }) => (
  <tfoot data-testid="table-footer" {...rest}>
    {children}
  </tfoot>
);

export default TableFooter;
