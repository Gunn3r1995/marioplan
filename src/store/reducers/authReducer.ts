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

export interface NewUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  initials: string;
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
      state.authError = action.error.message;

      return {
        ...state
      };
    case "SIGNOUT_SUCCESS":
      return state;
    case "SIGNUP_SUCCESS":
      console.log("sign up success");

      state.authError = "";
      state.isError = false;

      return {
        ...state
      };
    case "SIGNUP_ERROR":
      console.log("sign up error");
      state.isError = true;
      state.authError = action.error.message;

      return {
        ...state
      };
    default:
      // TODO: LOG
      break;
  }

  return state;
};

export default authReducer;
