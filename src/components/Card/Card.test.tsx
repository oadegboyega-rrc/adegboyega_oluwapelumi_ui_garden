import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import "@testing-library/jest-dom";

describe("Card", () => {
  it("should render children", () => {
    const { getByTestId } = render(<Card>Card Content</Card>);
    expect(getByTestId("card")).toHaveTextContent("Card Content");
  });

  it("should be visible", () => {
    const { getByTestId } = render(<Card>Visible Card</Card>);
    expect(getByTestId("card")).toBeVisible();
  });
});
