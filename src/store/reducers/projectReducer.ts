import { Action } from "redux";
import { ProjectActions } from "../actions/projectActions";

export interface ProjectState {
  projects: ReadonlyArray<Project>;
}

export type ProjectCreate = {
  title: string;
  content: string;
};

export type Project = {
  id: string;
  title: string;
  content: string;
  authorFirstName: string;
  authorLastName: string;
  authorId: string;
};

const initState: ProjectState = {
  projects: []
};

const projectReducer = (
  state: ProjectState = initState,
  action: ProjectActions
) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("Created Project", action.project);
      break;
    case "CREATE_PROJECT_ERROR":
      console.error("Create Project Error", action.error);
      break;
    default:
      // TODO: LOG
      break;
  }
  return state;
};

export default projectReducer;
