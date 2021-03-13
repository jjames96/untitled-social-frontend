/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useCookies } from "react-cookie";
import { LOGIN_URL } from "../../api/config";
import {
  BASE_COOKIE_ID,
  TOKEN_COOKIE_ID,
  USERNAME_COOKIE_ID,
} from "../../cookies/Cookies";

const Login = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookie, setCookie] = useCookies([BASE_COOKIE_ID]);

  const [uName, setUName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUName(event.currentTarget.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const handleRememberMeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRememberMe(event.currentTarget.checked);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const currentState = {
      username: uName,
      password,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currentState),
    };

    fetch(LOGIN_URL, requestOptions)
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
      })
      .then(() => window.location.replace("/home"));
  };

  return (
    <div className="jumbotron jumbotron-fluid mt-4">
      <div className="container">
        <h1 className="display-4">Log In</h1>
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
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              required
              onChange={handlePasswordChange}
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
};

export default Login;
