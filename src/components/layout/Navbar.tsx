import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLink";
import SignedOutLinks from "./SignedOutLink";
import { connect } from "react-redux";
import { State } from "../../store/reducers/rootReducer";

interface Props {
  auth: any;
  profile: any;
}

const Navbar = (props: Props) => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to={"/"} className="brand-logo">
          Mario Plan
        </Link>
        {props.auth.isLoaded &&
          (props.auth.uid ? (
            <SignedInLinks profile={props.profile} />
          ) : (
            <SignedOutLinks />
          ))}
      </div>
    </nav>
  );
};

const mapStateToProps = (state: State): Props => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
