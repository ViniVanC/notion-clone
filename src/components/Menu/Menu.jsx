import React, { useReducer, useState } from "react";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { MenuList } from "./MenuList/MenuList";

import "./Menu.scss";
import { User } from "./User/User";

export const Menu = ({ notesList, setNotesList }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useReducer((o) => !o, true);

  function createdNewNote() {
    let newNote = {
      id: v4(),
      title: "",
      content: "",
      date: new Date(),
      linkTitle: "",
    };

    if (!newNote.title) {
      newNote = { ...newNote, linkTitle: "Undefined" };
    }

    setNotesList([...notesList, newNote]);

    navigate(`/note-${newNote.id}`);
  }

  function deleteItem(id) {
    setNotesList(notesList.filter((note) => note.id !== id));
  }

  return (
    <nav className={`menu ${!open && "close"}`}>
      <header className="menu__header">
        <User />
        <Button className={`closeBtn ${!open && "close"}`} funk={setOpen} />
      </header>
      <Button funk={createdNewNote} />

      <h2 className="menu__title">Notions list</h2>
      <MenuList list={notesList} deleteItem={deleteItem} />
    </nav>
  );
};
