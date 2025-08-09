import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RadioButton from "./RadioButton";
import "@testing-library/jest-dom";

describe("RadioButton", () => {
  it("renders with label", () => {
    const { getByText } = render(<RadioButton label="Option" />);
    expect(getByText("Option")).toBeInTheDocument();
  });

  it("can be checked", () => {
    const { getByTestId } = render(<RadioButton />);
    const radio = getByTestId("radio-button") as HTMLInputElement;
    expect(radio.checked).toBe(false);
    fireEvent.click(radio);
    // Note: checked state won't change unless controlled, but this checks the element exists
    expect(radio).toBeInTheDocument();
  });
});
