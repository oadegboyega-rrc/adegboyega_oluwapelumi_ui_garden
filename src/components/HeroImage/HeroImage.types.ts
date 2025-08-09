import React from "react";

export interface HeroImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  height?: string | number;
  width?: string | number;
}
