import { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 } from "uuid";
import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { Note } from "./components/Note/Note";
import { Home } from "./Pages/Home/Home";

function App() {
  const initialNotes = [
    {
      id: v4(),
      title: "Note 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, recusandae id ea sequi cumque eligendi ex unde asperiores quia. Excepturi dolor nihil sint quod atque aliquid fugiat eligendi, quo ex.",
      date: new Date(),
    },
    {
      id: v4(),
      title: "",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, recusandae id ea sequi cumque eligendi ex unde asperiores quia. Excepturi dolor nihil sint quod atque aliquid fugiat eligendi, quo ex.",
      date: new Date(),
    },
  ];

  const themeList = ["dark", "light", "teal"];
  const [currentThemeNumber, setCurrentThemeNumber] = useState(0);

  const [notesList, setNotesList] = useState(
    initialNotes.map((note) => ({
      ...note,
      linkTitle: note.title || "Undefined",
    }))
  );

  const [newNote, setNewNote] = useState({
    id: undefined,
    title: "",
    content: "",
    linkTitle: "",
  });

  useEffect(() => {
    if (newNote.id) {
      setNotesList((prevNotesList) => {
        return prevNotesList.map((note) =>
          note.id === newNote.id
            ? {
                ...note,
                title: newNote.title,
                content: newNote.content,
                linkTitle: newNote.title || "Undefined",
              }
            : note
        );
      });
    }

    if (newNote.id !== undefined) {
      setNewNote({
        id: undefined,
        title: "",
        content: "",
        linkTitle: "",
      });
    }
  }, [newNote]);

  return (
    <main className={`${themeList[currentThemeNumber]}`}>
      <Router>
        <Menu notesList={notesList} setNotesList={setNotesList} />
        <section className="note-section">
          <Header
            themeList={themeList}
            currentThemeNumber={currentThemeNumber}
            setCurrentThemeNumber={setCurrentThemeNumber}
          />

          <Routes>
            <Route path="/" element={<Home />} />

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
