import { Action } from "redux";

export interface ProjectState {
  projects: ReadonlyArray<Project>;
}

export type Project = {
  id: string;
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

const projectReducer = (state: ProjectState = initState, action: Action) => {
  return state;
};

export default projectReducer;
