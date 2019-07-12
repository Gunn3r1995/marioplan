import {
  Project,
  ProjectState,
  ProjectCreate
} from "../reducers/projectReducer";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export const createProject = (project: ProjectCreate) => {
  return (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState: any,
    { getFirestore }: any
  ) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
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
