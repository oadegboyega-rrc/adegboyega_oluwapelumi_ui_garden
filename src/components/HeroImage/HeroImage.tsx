import React from "react";
import { HeroImageProps } from "./HeroImage.types";

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt = "Hero Image",
  height = "auto",
  width = "100%",
  style,
  ...rest
}) => (
  <img
    data-testid="hero-image"
    src={src}
    alt={alt}
    height={height}
    width={width}
    style={{
      display: "block",
      width,
      height,
      objectFit: "cover",
      ...style,
    }}
    {...rest}
  />
);

export default HeroImage;
