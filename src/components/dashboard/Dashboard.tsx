import React, { Component } from "react";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { ProjectState, Project } from "../../store/reducers/projectReducer";
import { State, Notification } from "../../store/reducers/rootReducer";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import Notifications from "./Notifications";

interface Props {
  projects: ReadonlyArray<Project>;
  notifications: ReadonlyArray<Notification>;
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
            <Notifications notifications={this.props.notifications} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State): Props => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  };
};

export default compose<any>(
  firestoreConnect([
    { collection: "projects", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] }
  ]),
  connect(mapStateToProps)
)(Dashboard);
