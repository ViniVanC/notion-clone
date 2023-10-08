import React from "react";
import { Container } from "../../components/Container/Container";
import { Link } from "react-router-dom";

export const LogIn = () => {
  return (
    <section className="section">
      <Container>
        <div className="section__inner">
          <form className="form">
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Log in</button>
            <p>
              Don't have an account yet <Link to={"/register"}>Register</Link>
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
};
