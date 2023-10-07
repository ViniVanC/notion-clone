import React, { useEffect, useState } from "react";
import { Container } from "../Container/Container";
import "./Note.scss";

export const Note = ({ note, setNewNote }) => {
  const [newThisNote, setNewThisNote] = useState({});

  useEffect(() => {
    setNewThisNote({
      id: note.id,
      title: note.title,
      content: note.content,
    });
  }, [note]);

  const [hasTitleChanged, setHasTitleChanged] = useState(false);
  const [hasContentChanged, setHasContentChanged] = useState(false);
  const [isDataSaved, setIsDataSaved] = useState(false);

  useEffect(() => {
    let timeoutId;

    if ((hasTitleChanged || hasContentChanged) && !isDataSaved) {
      timeoutId = setTimeout(() => {
        saveData();
        setIsDataSaved(true); // Позначаємо, що дані були збережені
      }, 1000);
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
    <section className="note-section note">
      <Container>
        <div className="note__inner">
          <input
            type="text"
            className={`note__title ${
              !note.title ? "note__title-default" : ""
            }`}
            value={newThisNote.title}
            onChange={handleChangeTitle}
          />
          <textarea
            className={`note__content ${
              !note.content ? "note__content-default" : ""
            }`}
            value={newThisNote.content}
            onChange={handleChangeTextarea}
          />
        </div>
      </Container>
    </section>
  );
};
