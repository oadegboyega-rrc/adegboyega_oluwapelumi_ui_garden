import React from "react";
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import TableFooter from "./TableFooter";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    children: (
      <>
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
      </>
    ),
  },
};
