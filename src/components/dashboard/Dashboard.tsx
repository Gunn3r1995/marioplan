import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { ProjectState, Project } from "../../store/reducers/projectReducer";
import { State } from "../../store/reducers/rootReducer";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { auth } from "firebase";
import { Redirect } from "react-router-dom";

interface Props {
  projects: ReadonlyArray<Project>;
  auth: any;
}

class Dashboard extends Component<Props> {
  render() {
    // Authentication Check
    if (!this.props.auth.uid) {
      return <Redirect to="/signin" />;
    }

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={this.props.projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State): Props => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  };
};

export default compose<any>(
  firestoreConnect(["projects"]),
  connect(mapStateToProps)
)(Dashboard);
