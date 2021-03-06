import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { ThunkDispatch } from "redux-thunk";
import { Credentials } from "../../store/reducers/authReducer";
import { State } from "../../store/reducers/rootReducer";
import { Redirect } from "react-router-dom";

interface Props {
  authError: string;
  isError: boolean;
  auth: any;
}

interface Actions {
  signIn: (credentials: Credentials) => void;
}

interface OwnState {
  email: string;
  password: string;
}

class SignIn extends Component<Props & Actions, OwnState> {
  constructor(props: Props & Actions, state: OwnState) {
    super(props, state);
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "email") {
      this.setState({
        email: e.target.value
      });
    }

    if (e.target.id === "password") {
      this.setState({
        password: e.target.value
      });
    }
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.signIn({ ...this.state });
  };

  render() {
    if (this.props.auth.uid) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
              {this.props.isError && <p>{this.props.authError}</p>}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: State): Props => {
  return {
    authError: state.auth.authError,
    isError: state.auth.isError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): Actions => {
  return {
    signIn: (credentials: Credentials) => dispatch(signIn(credentials))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
