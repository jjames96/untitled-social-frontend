/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useCookies } from "react-cookie";
import {
  BASE_COOKIE_ID,
  TOKEN_COOKIE_ID,
  USERNAME_COOKIE_ID,
} from "../../cookies/Cookies";

const Navbar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookie, setCookie, removeCookie] = useCookies([BASE_COOKIE_ID]);

  const handleLogout = () => {
    removeCookie(TOKEN_COOKIE_ID);
    removeCookie(USERNAME_COOKIE_ID);
    window.location.replace("/");
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand mb-0 h1" href="/">
          Untitled Social
        </a>
        {cookie.username && (
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {cookie.username}
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdown"
              >
                <a className="dropdown-item" href="/profile">
                  Profile
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#" onClick={handleLogout}>
                  Log Out
                </a>
              </div>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
