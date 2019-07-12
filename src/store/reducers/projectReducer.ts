import { Action } from "redux";
import { ProjectActions } from "../actions/projectActions";

export interface ProjectState {
  projects: ReadonlyArray<Project>;
}

export type Project = {
  title: string;
  content: string;
};

const initState = {
  projects: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "collect all the stars", content: "blah blah blah" },
    { id: "3", title: "egg hunt with yoshi", content: "blah blah blah" }
  ]
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
