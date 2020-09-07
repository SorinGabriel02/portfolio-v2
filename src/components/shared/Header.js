import React from "react";
import { NavLink } from "react-router-dom";

import { logo, mainHeader, links, activeLink } from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className={mainHeader}>
      <NavLink to="/home">
        <Logo className={logo} />
      </NavLink>
      <nav>
        <ul className={links}>
          <li>
            <NavLink activeClassName={activeLink} to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={activeLink} to="/projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={activeLink} to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
