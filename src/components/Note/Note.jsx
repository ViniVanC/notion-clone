import React from "react";
import { Container } from "../Container/Container";

import "./Note.scss";

export const Note = ({
  note = {
    title: "note1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, recusandae id ea sequi cumque eligendi ex unde asperiores quia. Excepturi dolor nihil sint quod atque aliquid fugiat eligendi, quo ex.",
  },
}) => {
  return (
    <section className="note-section note">
      <Container>
        <div className="note__inner">
          <h1
            className={`note__title ${
              !note.title ? "note__title-default" : ""
            }`}
          >
            {!note.title ? "Title..." : note.title}
          </h1>
          <p
            className={`note__content ${
              !note.content ? "note__content-default" : ""
            }`}
          >
            {!note.content ? "Enter text..." : note.content}
          </p>
        </div>
      </Container>
    </section>
  );
};
