import React, { useReducer, useState } from "react";
import { Button } from "../Button/Button";
import { MenuList } from "./MenuList/MenuList";

import "./Menu.scss";

export const Menu = ({ notesList, setNotesList }) => {
  const [open, setOpen] = useReducer((o) => !o, true);

  function createdNewNote() {
    setNotesList([
      ...notesList,
      {
        id: notesList[notesList.length - 1].id + 1,
        title: "Note",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, recusandae id ea sequi cumque eligendi ex unde asperiores quia. Excepturi dolor nihil sint quod atque aliquid fugiat eligendi, quo ex.",
        date: new Date(),
        link: "",
      },
    ]);
  }

  function deleteItem(id) {
    setNotesList(notesList.filter((note) => note.id !== id));
  }

  return (
    <nav className={`menu ${!open && "close"}`}>
      <header className="menu__header">
        <Button className={`closeBtn ${!open && "close"}`} funk={setOpen} />
      </header>
      <Button funk={createdNewNote} />

      <h2 className="menu__title">Notions list</h2>
      <MenuList list={notesList} deleteItem={deleteItem} />
    </nav>
  );
};
