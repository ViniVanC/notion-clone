import React from "react";
import { FaTrash } from "react-icons/fa";
import { Button } from "../../Button/Button";

export const MenuList = ({ list, deleteItem }) => {
  return (
    <ul className="menu__list menu-list">
      {list?.map((listItem) => (
        <li key={listItem.id} className="menu-list__item">
          <a className="menu-list__link" href="#">
            {listItem.title}
          </a>

          <Button
            className={"miniBtnNoBg"}
            funk={() => deleteItem(listItem.id)}
          >
            <FaTrash />
          </Button>
        </li>
      ))}
    </ul>
  );
};
