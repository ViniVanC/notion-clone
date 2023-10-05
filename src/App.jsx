import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { Note } from "./components/Note/Note";

function App() {
  return (
    <>
      <body>
        <Menu />
        <section className="note-section">
          <Header />
          <Note />
        </section>
      </body>
    </>
  );
}

export default App;
