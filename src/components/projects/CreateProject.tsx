import React, { Component, Dispatch } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { ProjectCreate } from "../../store/reducers/projectReducer";
import { ThunkDispatch } from "redux-thunk";
import { State } from "../../store/reducers/rootReducer";
import { Redirect } from "react-router-dom";

interface Props {
  auth: any;
  history: any;
}

interface Actions {
  createProject: (project: ProjectCreate) => void;
}

class CreateProject extends Component<Props & Actions> {
  constructor(props: Props & Actions) {
    super(props);
  }

  state: ProjectCreate = {
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

    const project: ProjectCreate = {
      ...this.state
    };
    this.props.createProject(project);

    return this.props.history.push("/");
  };

  render() {
    // Authentication Check
    if (!this.props.auth.uid) {
      return <Redirect to="/signin" />;
    }

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

const mapStateToProps = (state: State, ownProps: any): Props => {
  return {
    ...ownProps,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): Actions => {
  return {
    createProject: (project: ProjectCreate) => dispatch(createProject(project))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
