import React, { useEffect, useState } from "react";
import { Container } from "../Container/Container";
import "./Note.scss";
import { Menu } from "../Menu/Menu";

export const Note = ({ note, setNewNote, notesList, setNotesList }) => {
  const [newThisNote, setNewThisNote] = useState({});
  const [hasTitleChanged, setHasTitleChanged] = useState(false);
  const [hasContentChanged, setHasContentChanged] = useState(false);
  const [isDataSaved, setIsDataSaved] = useState(false);

  useEffect(() => {
    setNewThisNote({
      id: note.id,
      title: note.title,
      content: note.content,
      linkTitle: note.title,
    });
  }, [note]);

  useEffect(() => {
    let timeoutId;

    if ((hasTitleChanged || hasContentChanged) && !isDataSaved) {
      timeoutId = setTimeout(() => {
        saveData();
        setIsDataSaved(true); // Позначаємо, що дані були збережені
      }, 10);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [hasTitleChanged, hasContentChanged, isDataSaved]);

  const saveData = () => {
    setNewNote(newThisNote);
    setIsDataSaved(false); // Скидаємо прапорець, щоб дозволити збереження при нових змінах
  };

  const handleChangeTitle = (e) => {
    setNewThisNote({
      ...newThisNote,
      title: e.target.value,
      linkTitle: e.target.value,
    });
    setHasTitleChanged(true);
    setIsDataSaved(false); // Скидаємо прапорець, якщо дані знову змінюються
  };

  const handleChangeTextarea = (e) => {
    setNewThisNote({
      ...newThisNote,
      content: e.target.value,
    });
    setHasContentChanged(true);
    setIsDataSaved(false); // Скидаємо прапорець, якщо дані знову змінюються
  };

  return (
    <>
      <Menu notesList={notesList} setNotesList={setNotesList} />

      <section className="note-section note">
        <Container>
          <div className="note__inner">
            <input
              type="text"
              className={`note__title `}
              value={newThisNote.title}
              placeholder="Title..."
              onChange={handleChangeTitle}
            />
            <textarea
              className={`note__content`}
              value={newThisNote.content}
              placeholder="Enter text..."
              onChange={handleChangeTextarea}
            />
          </div>
        </Container>
      </section>
    </>
  );
};
