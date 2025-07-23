import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";

describe("Button", () => {
  it("should be visible", () => {
    const { getByTestId } = render(<Button text="Button" />);
    expect(getByTestId("Button")).toBeVisible();
  });

  it("should change color when disabled", () => {
    const { getByTestId } = render(<Button text="Button" disabled />);
    expect(getByTestId("Button")).toHaveStyle("color: #999");
  });
});
