import React from "react";

import { landing } from "./Welcome.module.scss";

const Welcome = () => {
  return (
    <main className={landing}>
      <h1>Welcome</h1>
      <h2>
        My name is Gabriel and I love building web sites and apps with{" "}
        <mark>React</mark> and <mark>NodeJS</mark>
      </h2>
      <h3>
        If you're looking for a passionate guy who enjoys solving problems,
        <i> you're</i> in the <i>right</i> place.
      </h3>
    </main>
  );
};

export default Welcome;
