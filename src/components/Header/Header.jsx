import React from "react";
import { Logo } from "../Logo/Logo";

import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <Logo size={40} />
    </header>
  );
};
