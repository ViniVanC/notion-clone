import React from "react";
import { Container } from "../../components/Container/Container";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Container>
        <div className="home__inner">
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
          <div className="description">
            I made this app to improve my skills.
          </div>
          <div className="description">
            This is how I see a concise notebook.
          </div>
        </div>
      </Container>
    </div>
  );
};
