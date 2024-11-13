import React from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio"; // Ensure correct import based on export method

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{bigProjects.title}</h1>
        <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
        <div className="startup-projects-main">
          <div className="startup-project-text">
            {bigProjects.projects.map((project) => {
              return (
                <div
                  key={project.title} // Add a unique "key" prop for list items
                  className="saaya-health-div"
                  onClick={() => openProjectInNewWindow(project.link)}
                >
                  <img alt={project.title} src={project.image}></img>
                </div>
              );
            })}
          </div>
          <div className="starup-project-image"></div>
        </div>
      </div>
    </div>
  );
}
