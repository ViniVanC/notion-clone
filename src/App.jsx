import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 } from "uuid";
import { Header } from "./components/Header/Header";
import { Home } from "./Pages/Home/Home";
import { Notes } from "./Pages/Notes/Notes";
import { LogIn } from "./Pages/LoginRegister/LogIn";
import { Register } from "./Pages/LoginRegister/Register";

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
        <section className="note-section">
          <Header
            themeList={themeList}
            currentThemeNumber={currentThemeNumber}
            setCurrentThemeNumber={setCurrentThemeNumber}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/notes"
              element={
                <Notes
                  notesList={notesList}
                  setNotesList={setNotesList}
                  setNewNote={setNewNote}
                />
              }
            />
          </Routes>
        </section>
      </Router>
    </main>
  );
}

export default App;
