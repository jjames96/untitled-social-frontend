/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent } from "react";

interface RegisterState {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

class Register extends React.Component<Record<string, never>, RegisterState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      username: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(
      this
    );
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ username: event.currentTarget.value });
  }

  handleFirstNameChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ firstName: event.currentTarget.value });
  }

  handleLastNameChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ lastName: event.currentTarget.value });
  }

  handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ password: event.currentTarget.value });
  }

  handleConfirmPasswordChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ confirmPassword: event.currentTarget.value });
  }

  handleSubmit() {
    const currentState = this.state;

    console.log(
      `Form submitted with values:
      Username: ${currentState.username}
      First Name: ${currentState.firstName}
      Last Name: ${currentState.lastName}
      Password: ${currentState.password}
      Confirm Password: ${currentState.confirmPassword}`
    );
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-4">
        <div className="container">
          <h1 className="display-4">Register</h1>
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
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    id="inputFirstName"
                    placeholder="First Name"
                    required
                    onChange={this.handleFirstNameChange}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    id="inputLastName"
                    placeholder="Surname"
                    required
                    onChange={this.handleLastNameChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                required
                pattern=".{3,}"
                onChange={this.handlePasswordChange}
              />
              <small id="passwordHelpBlock" className="form-text text-muted">
                Your password must be 3+ characters long.
              </small>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="inputConfirmPassword"
                placeholder="Confirm Password"
                required
                pattern=".{3,}"
                onChange={this.handleConfirmPasswordChange}
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
                Create An Account
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
