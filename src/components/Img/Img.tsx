import React from "react";
import { ImgProps } from "./Img.types";

const Img: React.FC<ImgProps> = ({ src, alt = "image", ...rest }) => (
  <img data-testid="img" src={src} alt={alt} {...rest} />
);

export default Img;
