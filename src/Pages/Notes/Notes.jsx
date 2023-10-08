import React from "react";
import { Menu } from "../../components/Menu/Menu";
import { Note } from "../../components/Note/Note";
import { Route, Router } from "react-router-dom";

export const Notes = ({ notesList, setNotesList, setNewNote }) => {
  return (
    <>
      <Menu notesList={notesList} setNotesList={setNotesList} />
    </>
  );
};
