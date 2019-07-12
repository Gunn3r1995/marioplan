import { Action } from "redux";
import { AuthActions } from "../actions/authActions";

const initState: AuthState = {
  isError: false,
  authError: ""
};

export interface AuthState {
  isError: boolean;
  authError: string;
}

export interface Credentials {
  email: string;
  password: string;
}

const authReducer = (state: AuthState = initState, action: AuthActions) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      state.authError = "";
      state.isError = false;

      return {
        ...state
      };
    case "LOGIN_ERROR":
      state.isError = true;
      state.authError = "Login Failed";

      return {
        ...state
      };
    case "SIGNOUT_SUCCESS":
      return state;
    default:
      // TODO: LOG
      break;
  }

  return state;
};

export default authReducer;
