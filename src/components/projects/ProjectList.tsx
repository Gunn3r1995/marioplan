import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Project } from "../../store/reducers/projectReducer";

interface Props {
  projects: ReadonlyArray<Project>;
}

const ProjectList = (props: Props) => {
  return (
    <div className="project-list section">
      {props.projects &&
        props.projects.map(project => {
          return <ProjectSummary key={1} project={project} />;
        })}
    </div>
  );
};

export default ProjectList;
