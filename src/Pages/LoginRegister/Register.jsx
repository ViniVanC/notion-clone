import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../components/Container/Container";

export const Register = () => {
  return (
    <section className="section">
      <Container>
        <div className="section__inner">
          <form className="form">
            <input type="text" placeholder="User name" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Register</button>
            <p>
              Already have an account <Link to={"/login"}>Log in</Link>
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
};
