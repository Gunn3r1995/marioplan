import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { ThunkDispatch } from "redux-thunk";

interface Actions {
  signOut: () => void;
}

const SignedInLinks = (props: Actions) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <a onClick={_ => props.signOut()}>Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          SS
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): Actions => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
