import { Credentials, AuthState, User, NewUser } from "../reducers/authReducer";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { getFirestore } from "redux-firestore";

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

export const signUp = (newUser: NewUser) => {
  return (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState: AuthState,
    { getFirebase, getFirestore }: any
  ) => {
    const firebase = getFirebase();
    const fireStore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((response: any) => {
        return fireStore
          .collection("users")
          .doc(response.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0]
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch((error: Error) => {
        dispatch({ type: "SIGNUP_ERROR", error });
      });
  };
};

export interface LoginSuccess {
  type: "LOGIN_SUCCESS";
}

export interface LoginError {
  type: "LOGIN_ERROR";
  error: Error;
}

export interface SignUpSuccess {
  type: "SIGNUP_SUCCESS";
}

export interface SignUpError {
  type: "SIGNUP_ERROR";
  error: Error;
}

export interface SignOutSuccess {
  type: "SIGNOUT_SUCCESS";
}

export type AuthActions =
  | LoginSuccess
  | LoginError
  | SignOutSuccess
  | SignUpError
  | SignUpSuccess;
