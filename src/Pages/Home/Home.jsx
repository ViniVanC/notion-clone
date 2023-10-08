import React from "react";
import { Container } from "../../components/Container/Container";
import { Menu } from "../../components/Menu/Menu";

export const Home = ({ notesList, setNotesList }) => {
  return (
    <>
      <Menu notesList={notesList} setNotesList={setNotesList} />

      <section className="home section">
        <Container>
          <div className="home__inner section__inner">
            <h1 className="title">Tanuki Note</h1>
            <p className="description">
              Hi, this is an app developed by{" "}
              <a href="https://github.com/ViniVanC" target="_blank">
                Vincent Van
              </a>{" "}
              in partnership with{" "}
              <a href="https://chat.openai.com/" target="_blank">
                {" "}
                chatGPT
              </a>
              .
            </p>
            <p className="description">I made this app to improve my skills.</p>
            <p className="description">This is how I see a concise notebook.</p>
          </div>
        </Container>
      </section>
    </>
  );
};
