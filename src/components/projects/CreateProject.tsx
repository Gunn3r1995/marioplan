import React, { Component, Dispatch } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Action } from "history";
import { Project } from "../../store/reducers/projectReducer";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

interface Actions {
  createProject: (project: Project) => void;
}

class CreateProject extends Component<Actions> {
  constructor(props: Actions) {
    super(props);
  }

  state = {
    title: "",
    content: ""
  };

  handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const project: Project = {
      ...this.state
    };
    this.props.createProject(project);

    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): Actions => {
  return {
    createProject: (project: Project) => dispatch(createProject(project))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateProject);
