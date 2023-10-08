import React from "react";
import { Logo } from "../Logo/Logo";
import { Button } from "../Button/Button";
import { FaSun, FaMoon } from "react-icons/fa";

import "./Header.scss";
import { Link } from "react-router-dom";

export const Header = ({
  themeList,
  currentThemeNumber,
  setCurrentThemeNumber,
}) => {
  const changeTheme = () => {
    setCurrentThemeNumber(currentThemeNumber + 1);

    if (currentThemeNumber >= themeList.length - 1) {
      setCurrentThemeNumber(0);
    }
  };

  return (
    <header className="header">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Logo size={40} />
      </Link>
      <Button className={"miniBtnNoBg"} funk={changeTheme}>
        {themeList[currentThemeNumber] === "dark" ? (
          <FaMoon />
        ) : themeList[currentThemeNumber] === "light" ? (
          <FaSun />
        ) : (
          ""
        )}
      </Button>
    </header>
  );
};
