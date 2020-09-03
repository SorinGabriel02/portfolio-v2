import React from "react";
import { NavLink } from "react-router-dom";

import { logo, mainHeader, links } from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className={mainHeader}>
      <NavLink to="/">
        <Logo className={logo} />
      </NavLink>
      <nav>
        <ul className={links}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
