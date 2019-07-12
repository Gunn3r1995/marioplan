import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { ProjectState, Project } from "../../store/reducers/projectReducer";

interface Props {
  project: Project;
}

class ProjectDetails extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    if (this.props.project != null) {
      return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{this.props.project.title}</span>
              <p>{this.props.project.content}</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>
                Posted by {this.props.project.authorFirstName}{" "}
                {this.props.project.authorLastName}
              </div>
              <div>2nd September, 2am</div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container center">
          <p>Loading project...</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;

  console.log(projects);
  return {
    project: project
  };
};

export default compose<any>(
  firestoreConnect([
    {
      collection: "projects"
    }
  ]),
  connect(mapStateToProps)
)(ProjectDetails);
