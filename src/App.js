import React, { useRef } from "react";
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
  const currentPath = location.pathname;
  const previousPath = location.state && location.state.from;
  // needed for CSSTransition
  const nodeRef = useRef(null);
  // array of all routes in order
  const routes = ["/", "/home", "/projects", "/about"];
  // whether the user is navigating from right or from left
  // animate from right or left
  const fromRight = () => {
    return Boolean(routes.indexOf(currentPath) <= routes.indexOf(previousPath));
  };

  return (
    <TransitionGroup component="div" className="app">
      <Header />
      <CSSTransition
        nodeRef={nodeRef}
        key={location.key}
        timeout={{ enter: 300, exit: 5 }}
        classNames="pages"
        mountOnEnter={false}
        unmountOnExit={true}
      >
        <div ref={nodeRef} className={fromRight() ? "right" : "left"}>
          <Switch location={location}>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </CSSTransition>
      <Footer />
    </TransitionGroup>
  );
}

export default App;
