import React from "react";

export const Logo = ({ color, size }) => {
  return (
    <div
      className="ico-tanukiLogo"
      style={{
        color: `${color}`,
        fontSize: `${size}px`,
      }}
    />
  );
};
