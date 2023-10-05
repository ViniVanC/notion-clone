import React from "react";
import "./Button.scss";

export const Button = ({ children, className, funk = (f) => f }) => {
  return (
    <button className={`${className} defaultBtn`} onClick={funk}>
      {children}
    </button>
  );
};
