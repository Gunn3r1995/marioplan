import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Project } from "../../store/reducers/projectReducer";
import { Link } from "react-router-dom";

interface Props {
  projects: ReadonlyArray<Project>;
}

const ProjectList = (props: Props) => {
  return (
    <div className="project-list section">
      {props.projects &&
        props.projects.map(project => {
          return (
            <Link to={"/project/" + project.id}>
              <ProjectSummary key={project.id} project={project} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
