import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dropdown from "./Dropdown";
import "@testing-library/jest-dom";

const options = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
];

describe("Dropdown", () => {
  it("renders all options", () => {
    const { getByTestId } = render(<Dropdown options={options} />);
    const select = getByTestId("dropdown");
    expect(select.children.length).toBe(2);
  });

  it("calls onChange when an option is selected", () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <Dropdown options={options} onChange={handleChange} />,
    );
    fireEvent.change(getByTestId("dropdown"), { target: { value: "2" } });
    expect(handleChange).toHaveBeenCalled();
  });
});
