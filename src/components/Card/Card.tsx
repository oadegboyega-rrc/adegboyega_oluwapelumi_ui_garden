import React from "react";
import { CardProps } from "./Card.types";

const Card: React.FC<CardProps> = ({ children, ...rest }) => (
  <div
    data-testid="card"
    style={{
      border: "1px solid #eee",
      borderRadius: 8,
      padding: 16,
      boxShadow: "0 2px 8px #eee",
    }}
    {...rest}
  >
    {children}
  </div>
);

export default Card;
