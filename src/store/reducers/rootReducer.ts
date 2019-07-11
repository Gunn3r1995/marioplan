import autoReducer from "./authReducer";
import projectReducer, { ProjectState } from "./projectReducer";
import { combineReducers } from "redux";
import authReducer from "./authReducer";

export interface State {
  project: ProjectState;
}

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer
});

export default rootReducer;
