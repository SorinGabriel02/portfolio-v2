import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { logo, mainHeader, links, activeLink } from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => {
  const location = useLocation();
  return (
    <header className={mainHeader}>
      <NavLink to={{ pathname: "/", state: { from: location.pathname } }}>
        <Logo className={logo} />
      </NavLink>
      <nav>
        <ul className={links}>
          <li>
            <NavLink
              exact
              activeClassName={activeLink}
              to={{ pathname: "/", state: { from: location.pathname } }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={activeLink}
              to={{ pathname: "/projects", state: { from: location.pathname } }}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={activeLink}
              to={{ pathname: "/about", state: { from: location.pathname } }}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
