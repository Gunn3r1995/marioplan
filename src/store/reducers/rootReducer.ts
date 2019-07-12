import projectReducer, { ProjectState } from "./projectReducer";
import { combineReducers } from "redux";
import authReducer, { AuthState } from "./authReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

export interface State {
  auth: AuthState;
  project: ProjectState;
  firestore: any;
  firebase: any;
}

export interface Notification {
  id: string;
  content: string;
  user: string;
  time: any;
}

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
