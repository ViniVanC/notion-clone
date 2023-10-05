import React from "react";
import { FaTrash } from "react-icons/fa";

export const MenuList = ({
  list = [{ text: "note1" }, { text: "note1" }, { text: "note1" }],
}) => {
  return (
    <ul className="menu__list menu-list">
      {list.map((listItem, i) => (
        <li key={i} className="menu-list__item">
          <a className="menu-list__link" href="#">
            {listItem.text}
          </a>

          <button className="miniBtnNoBg">
            <FaTrash />
          </button>
        </li>
      ))}
    </ul>
  );
};
