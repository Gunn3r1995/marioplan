import { Project, ProjectState } from "../reducers/projectReducer";
import { State } from "../reducers/rootReducer";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export const createProject = (project: Project) => {
  return (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState: ProjectState,
    { getFirebase, getFirestore }: any
  ) => {
    // make async call to database
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Shane",
        authorLastName: "Smith",
        authorId: 12345,
        createAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((error: Error) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", error });
      });
  };
};

export interface CreateProject {
  type: "CREATE_PROJECT";
  project: Project;
}

export interface CreateProjectError {
  type: "CREATE_PROJECT_ERROR";
  error: Error;
}

export type ProjectActions = CreateProject | CreateProjectError;
