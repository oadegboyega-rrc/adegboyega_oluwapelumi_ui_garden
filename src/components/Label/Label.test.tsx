import React from "react";
import { render } from "@testing-library/react";
import Label from "./Label";
import "@testing-library/jest-dom";

describe("Label", () => {
  it("should be visible", () => {
    const { getByTestId } = render(<Label text="Label" />);
    expect(getByTestId("label")).toBeVisible();
  });

  it("should change color when disabled", () => {
    const { getByTestId } = render(<Label text="Label" disabled />);
    expect(getByTestId("label")).toHaveStyle("color: #999");
  });
});
