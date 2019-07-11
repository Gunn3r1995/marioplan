import React from "react";
import { Project } from "../../store/reducers/projectReducer";

interface Props {
  project: Project;
}

const ProjectSummary = (props: Props) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{props.project.title}</span>
        <p>Posted by Shane Smith</p>
        <p className="grey-text">3rd September, 2am</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
