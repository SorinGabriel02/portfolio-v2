import React from "react";

import { projectCard, links } from "./ProjectCard.module.scss";

const ProjectCard = ({ name, codeUrl, liveUrl, description, imageSrc }) => {
  return (
    <section className={projectCard}>
      <h2>{name}</h2>
      <p>{description}</p>
      <div className={links}>
        <a href={codeUrl} target="_blank" rel="noopener noreferrer">
          See Code
        </a>
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            Go Live
          </a>
        )}
      </div>
      <img src={imageSrc} alt={`${name} screenshot`} />
    </section>
  );
};

export default ProjectCard;
