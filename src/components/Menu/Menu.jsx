import React from "react";
import { Button } from "../Button/Button";
import { MenuList } from "./MenuList/MenuList";

import "./Menu.scss";

export const Menu = () => {
  return (
    <nav className="menu">
      <header className="menu__header">
        <Button className={"closeBtn"} />
      </header>
      <Button />

      <h2 className="menu__title">Notions list</h2>
      <MenuList />
    </nav>
  );
};
