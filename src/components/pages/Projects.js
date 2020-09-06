import React from "react";

import { PROJECTS } from "../../utils/projects";
import { projectsContainer } from "./Projects.module.scss";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  return (
    <main className={projectsContainer}>
      <h1>What I've Been Working On</h1>
      {PROJECTS.map((project) => (
        <ProjectCard
          key={project.id}
          name={project.name}
          codeUrl={project.codeUrl}
          liveUrl={project.liveUrl}
          imageSrc={project.imageSrc}
          description={project.details}
        />
      ))}
    </main>
  );
};

export default Projects;
