import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { ProjectState, Project } from "../../store/reducers/projectReducer";
import { State } from "../../store/reducers/rootReducer";
import { type } from "os";

interface Props {
  projects: ReadonlyArray<Project>;
}

class Dashboard extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    console.log(this.props.projects);
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

const mapStateToProps = (state: State) => {
  return {
    projects: state.project.projects
  };
};

export default connect(mapStateToProps)(Dashboard);
