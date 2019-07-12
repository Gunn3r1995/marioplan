import React, { Component } from "react";
import { connect } from "react-redux";
import { State } from "../../store/reducers/rootReducer";
import { Redirect } from "react-router-dom";
import { NewUser } from "../../store/reducers/authReducer";
import { signUp } from "../../store/actions/authActions";
import { ThunkDispatch } from "redux-thunk";

interface Props {
  authError: string;
  isError: boolean;
  auth: any;
}

interface Actions {
  signUp: (newUser: NewUser) => void;
}

class SignUp extends Component<Props & Actions> {
  constructor(props: Props & Actions) {
    super(props);
  }

  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.props.signUp({
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    });
  };

  render() {
    if (this.props.auth.uid) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
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
    signUp: (newUser: NewUser) => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
