import React from "react";
import { Button } from "../Button/Button";

import "./Menu.scss";

export const Menu = () => {
  return (
    <nav className="menu">
      <header className="menu__header">
        <Button className={"closeBtn"} />
      </header>
      <Button />

      <h2 className="menu__title">Notions list</h2>
      <ul className="menu__list menu-list">
        <li className="menu-list__item">
          <a href="#">Note 1</a>
        </li>
      </ul>
    </nav>
  );
};
