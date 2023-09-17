import React from "react";
import "./Project.css";
import ProjectItem from "./ProjectItem/ProjectItem";
import ProjectItemsArray from "./ProjectObject";

const Project = () => {
  return (
    <div id="projects" className="project-body">
      <div className="project-container">
        <div className="project-heading">
          <h2>Projects</h2>
          <div className="project-heading-underline"></div>
        </div>
        <div className="project-items">
          {ProjectItemsArray.map((projectItem) => {
            return (
              <ProjectItem
                key={projectItem.id}
                name={projectItem.name}
                description={projectItem.description}
                ImageLink={projectItem.ImageLink}
                techstack={projectItem.techstack}
                link={projectItem.githubLink}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
