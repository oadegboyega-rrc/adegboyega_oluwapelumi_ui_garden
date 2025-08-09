import React from "react";
export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
    children?: React.ReactNode;
}
export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    children?: React.ReactNode;
}
export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    children?: React.ReactNode;
}
export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
    children?: React.ReactNode;
}
export interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    children?: React.ReactNode;
}
