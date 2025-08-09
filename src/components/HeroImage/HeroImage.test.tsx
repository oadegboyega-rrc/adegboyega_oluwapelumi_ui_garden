import React from "react";
import { render } from "@testing-library/react";
import HeroImage from "./HeroImage";
import "@testing-library/jest-dom";

describe("HeroImage", () => {
  it("renders with correct src and alt", () => {
    const { getByTestId } = render(
      <HeroImage src="test.jpg" alt="Test Hero" />,
    );
    const img = getByTestId("hero-image");
    expect(img).toHaveAttribute("src", "test.jpg");
    expect(img).toHaveAttribute("alt", "Test Hero");
  });

  it("applies width and height", () => {
    const { getByTestId } = render(
      <HeroImage src="test.jpg" width={400} height={200} />,
    );
    const img = getByTestId("hero-image");
    expect(img).toHaveAttribute("width", "400");
    expect(img).toHaveAttribute("height", "200");
  });
});
