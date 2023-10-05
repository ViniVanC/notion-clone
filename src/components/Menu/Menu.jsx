import React, { useReducer, useState } from "react";
import { Button } from "../Button/Button";
import { MenuList } from "./MenuList/MenuList";

import "./Menu.scss";

export const Menu = () => {
  const [open, setOpen] = useReducer((o) => !o, true);

  return (
    <nav className={`menu ${!open && "close"}`}>
      <header className="menu__header">
        <Button className={`closeBtn ${!open && "close"}`} funk={setOpen} />
      </header>
      <Button />

      <h2 className="menu__title">Notions list</h2>
      <MenuList />
    </nav>
  );
};
