import React from "react";

import { projectsContainer, projectCard } from "./Projects.module.scss";

const Projects = () => {
  return (
    <main className={projectsContainer}>
      <h1>What I've Been Working On</h1>
      <p>
        This section of the portfolio is under construction and will be updated
        soon...
      </p>
      <section className={projectCard}>
        <h2>Support Teachers</h2>
      </section>
      <section className={projectCard}>
        <h2>Ravenous</h2>
      </section>
      <section className={projectCard}>
        <h2>Pick Me</h2>
      </section>
    </main>
  );
};

export default Projects;
