import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { ProjectState, Project } from "../../store/reducers/projectReducer";
import { State } from "../../store/reducers/rootReducer";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

interface Props {
  projects: ReadonlyArray<Project>;
}

class Dashboard extends Component<Props> {
  render() {
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

const mapStateToProps = (state: any) => {
  return {
    projects: state.firestore.ordered.projects
  };
};

export default compose<any>(
  firestoreConnect(["projects"]),
  connect(mapStateToProps)
)(Dashboard);
