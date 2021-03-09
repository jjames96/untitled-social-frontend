/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent } from "react";

interface LoginState {
  username: string;
  password: string;
}

class Login extends React.Component<Record<string, never>, LoginState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ username: event.currentTarget.value });
  }

  handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ password: event.currentTarget.value });
  }

  handleSubmit() {
    const currentState = this.state;

    console.log(
      `Form submitted with values:
      Username: ${currentState.username}
      Password: ${currentState.password}`
    );
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-4">
        <div className="container">
          <h1 className="display-4">Log In</h1>
          <hr className="my-4" />
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text" id="btnGroupAddon">
                    @
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="inputUsername"
                  placeholder="Username"
                  required
                  onChange={this.handleUsernameChange}
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                required
                onChange={this.handlePasswordChange}
              />
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMeCheck"
              />
              <label className="form-check-label" htmlFor="rememberMeCheck">
                Remember Me
              </label>
            </div>
            <div className="mt-4">
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
              <a
                className="btn btn-outline-primary ml-2"
                href="/register"
                role="button"
              >
                Create An Account
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
