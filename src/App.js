import React, { useState } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./App.scss";
import Header from "./components/shared/Header";
import Welcome from "./components/pages/Welcome";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import Footer from "./components/shared/Footer";

function App() {
  const location = useLocation();

  const currentKey = location.pathname.split("/")[1];

  const [prevLocation, setPrevLocation] = useState(location.pathname);

  const transitionDirection = () => {};

  return (
    <TransitionGroup component="div" className="app">
      <Header />
      <CSSTransition
        key={location.key}
        timeout={{ enter: 400, exit: 5 }}
        classNames="pages"
        mountOnEnter={false}
        unmountOnExit={true}
      >
        <div className="right">
          <Switch location={location}>
            <Route exact path="/home">
              <Welcome />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Redirect to="/home" />
          </Switch>
        </div>
      </CSSTransition>
      <Footer />
    </TransitionGroup>
  );
}

export default App;
