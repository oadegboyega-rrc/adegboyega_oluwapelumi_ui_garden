import React from "react";
import { render } from "@testing-library/react";
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import TableFooter from "./TableFooter";
import "@testing-library/jest-dom";

describe("Table components", () => {
  it("renders a table with header, row, cell, and footer", () => {
    const { getByTestId, getAllByTestId } = render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Header</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Body</TableCell>
          </TableRow>
        </tbody>
        <TableFooter>
          <TableRow>
            <TableCell>Footer</TableCell>
          </TableRow>
        </TableFooter>
      </Table>,
    );
    expect(getByTestId("table")).toBeVisible();
    expect(getByTestId("table-header")).toBeInTheDocument();
    expect(getAllByTestId("table-row")).toHaveLength(3);
    expect(getAllByTestId("table-cell")[0]).toHaveTextContent("Header");
    expect(getByTestId("table-footer")).toBeInTheDocument();
  });
});
