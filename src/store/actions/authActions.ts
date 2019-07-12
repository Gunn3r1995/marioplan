import { Credentials, AuthState } from "../reducers/authReducer";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export const signIn = (credentials: Credentials) => {
  return (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState: AuthState,
    { getFirebase }: any
  ) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((error: Error) => {
        dispatch({ type: "LOGIN_ERROR" });
      });
  };
};

export const signOut = () => {
  return (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState: AuthState,
    { getFirebase }: any
  ) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export interface LoginSuccess {
  type: "LOGIN_SUCCESS";
}

export interface SignOutSuccess {
  type: "SIGNOUT_SUCCESS";
}

export interface LoginError {
  type: "LOGIN_ERROR";
  error: Error;
}

export type AuthActions = LoginSuccess | LoginError | SignOutSuccess;
