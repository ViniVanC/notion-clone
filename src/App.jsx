import { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 } from "uuid";
import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { Note } from "./components/Note/Note";

function App() {
  const [notesList, setNotesList] = useState([
    {
      id: v4(),
      title: "Note 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, recusandae id ea sequi cumque eligendi ex unde asperiores quia. Excepturi dolor nihil sint quod atque aliquid fugiat eligendi, quo ex.",
      date: new Date(),
      link: "",
    },
    {
      id: v4(),
      title: "Note 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, recusandae id ea sequi cumque eligendi ex unde asperiores quia. Excepturi dolor nihil sint quod atque aliquid fugiat eligendi, quo ex.",
      date: new Date(),
      link: "",
    },
  ]);

  const [newNote, setNewNote] = useState({
    id: undefined,
    title: "",
    content: "",
  });

  useEffect(() => {
    if (newNote.id) {
      setNotesList((prevNotesList) => {
        return prevNotesList.map((note) =>
          note.id === newNote.id
            ? { ...note, title: newNote.title, content: newNote.content }
            : note
        );
      });
    }

    if (newNote.id !== undefined) {
      setNewNote({
        id: undefined,
        title: "",
        content: "",
      });
    }
  }, [newNote]);

  return (
    <main>
      <Router>
        <Menu notesList={notesList} setNotesList={setNotesList} />
        <section className="note-section">
          <Header />

          <Routes basename="/">
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
        </section>
      </Router>
    </main>
  );
}

export default App;
