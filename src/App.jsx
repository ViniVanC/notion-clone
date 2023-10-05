import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { Note } from "./components/Note/Note";

function App() {
  return (
    <>
      <Header />
      <section>
        <Menu />
        <Note />
      </section>
    </>
  );
}

export default App;
