import React from "react";

import { projectsContainer } from "./Projects.module.scss";

const Projects = () => {
  return (
    <main className={projectsContainer}>
      <h1>What I've Been Working On</h1>
      <section>
        <h2>Support Teachers</h2>
      </section>
      <section>
        <h2>Type Speed</h2>
      </section>
      <section>
        <h2>Pick Me</h2>
      </section>
    </main>
  );
};

export default Projects;
