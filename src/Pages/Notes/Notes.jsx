import React from "react";
import { Routes, Route } from "react-router-dom";
import { Menu } from "../../components/Menu/Menu";
import { Note } from "../../components/Note/Note";

export const Notes = ({ notesList, setNotesList, setNewNote }) => {
  return (
    <>
      <Menu notesList={notesList} setNotesList={setNotesList} />
      <Routes>
        {notesList.map((note) => (
          <Route
            key={note.id}
            path={`/note-${note.id}`}
            element={
              <Note
                note={note}
                setNotesList={setNotesList}
                setNewNote={setNewNote}
              />
            }
          />
        ))}
      </Routes>
    </>
  );
};
