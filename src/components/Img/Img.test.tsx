import React from "react";
import { render } from "@testing-library/react";
import Img from "./Img";
import "@testing-library/jest-dom";

describe("Img", () => {
  it("renders with correct src and alt", () => {
    const { getByTestId } = render(<Img src="test.jpg" alt="Test Img" />);
    const img = getByTestId("img");
    expect(img).toHaveAttribute("src", "test.jpg");
    expect(img).toHaveAttribute("alt", "Test Img");
  });

  it("renders with default alt if not provided", () => {
    const { getByTestId } = render(<Img src="test.jpg" />);
    expect(getByTestId("img")).toHaveAttribute("alt", "image");
  });
});
