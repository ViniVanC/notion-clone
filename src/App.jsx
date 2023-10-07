import { useState } from "react";
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
                element={<Note note={note} />}
              />
            ))}
          </Routes>
        </section>
      </Router>
    </main>
  );
}

export default App;
