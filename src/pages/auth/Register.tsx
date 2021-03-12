/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useCookies } from "react-cookie";
import { REGISTER_URL } from "../../api/config";
import {
  BASE_COOKIE_ID,
  TOKEN_COOKIE_ID,
  USERNAME_COOKIE_ID,
} from "../../cookies/Cookies";

const Register = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookie, setCookie] = useCookies([BASE_COOKIE_ID]);

  const [uName, setUName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUName(event.currentTarget.value);
  };

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.currentTarget.value);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.currentTarget.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const handleConfirmPasswordChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const handleRememberMeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRememberMe(event.currentTarget.checked);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const currentState = {
      username: uName,
      firstName,
      lastName,
      password,
      confirmPassword,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currentState),
    };

    fetch(REGISTER_URL, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const { username, token } = data;

        if (!username || !token) {
          // TODO: Handle error better
          return;
        }

        if (rememberMe) {
          // Store token in persistent cookie
          setCookie(USERNAME_COOKIE_ID, username, {
            maxAge: 60 * 60 * 24 * 365,
          });
          setCookie(TOKEN_COOKIE_ID, token, {
            maxAge: 60 * 60 * 24 * 365,
          });
        } else {
          // Store token in session cookie
          setCookie(USERNAME_COOKIE_ID, username);
          setCookie(TOKEN_COOKIE_ID, token);
        }
      });
  };

  return (
    <div className="jumbotron jumbotron-fluid mt-4">
      <div className="container">
        <h1 className="display-4">Register</h1>
        <hr className="my-4" />
        <form onSubmit={handleSubmit}>
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
                onChange={handleUsernameChange}
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
                  onChange={handleFirstNameChange}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="inputLastName"
                  placeholder="Surname"
                  required
                  onChange={handleLastNameChange}
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
              onChange={handlePasswordChange}
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
              onChange={handleConfirmPasswordChange}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMeCheck"
              onChange={handleRememberMeChange}
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
};

export default Register;
