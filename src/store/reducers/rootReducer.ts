import projectReducer, { ProjectState } from "./projectReducer";
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { firestoreReducer } from "redux-firestore";

export interface State {
  project: ProjectState;
}

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer
});

export default rootReducer;
