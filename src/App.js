import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/shared/Header";
import Welcome from "./components/pages/Welcome";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
