import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { Note } from "./components/Note/Note";

function App() {
  const [notesList, setNotesList] = useState([
    {
      id: 1,
      title: "Note 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, recusandae id ea sequi cumque eligendi ex unde asperiores quia. Excepturi dolor nihil sint quod atque aliquid fugiat eligendi, quo ex.",
      date: new Date(),
      link: "",
    },
  ]);

  // console.log(notesList);

  return (
    <main>
      <Menu notesList={notesList} setNotesList={setNotesList} />
      <section className="note-section">
        <Header />
        <Note />
      </section>
    </main>
  );
}

export default App;
