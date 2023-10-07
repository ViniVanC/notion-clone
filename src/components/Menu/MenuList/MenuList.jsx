import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { Button } from "../../Button/Button";

export const MenuList = ({ list, deleteItem }) => {
  return (
    <ul className="menu__list menu-list">
      {list?.map((listItem) => (
        <li key={listItem.id} className="menu-list__item">
          <Link className="menu-list__link" to={`/note-${listItem.id}`}>
            {listItem.title}
          </Link>

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
