import React from "react";
import { render } from "@testing-library/react";
import Text from "./Text";
import "@testing-library/jest-dom";

describe("Text", () => {
  it("renders children", () => {
    const { getByTestId } = render(<Text>Hello World</Text>);
    expect(getByTestId("text")).toHaveTextContent("Hello World");
  });

  it("is visible", () => {
    const { getByTestId } = render(<Text>Visible Text</Text>);
    expect(getByTestId("text")).toBeVisible();
  });
});
