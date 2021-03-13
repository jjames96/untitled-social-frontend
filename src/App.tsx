import React from "react";
import { useCookies } from "react-cookie";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { BASE_COOKIE_ID } from "./cookies/Cookies";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

const App = () => {
  const [cookie] = useCookies([BASE_COOKIE_ID]);
  const isLoggedIn = cookie.username && cookie.token;

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route path="/home">
              {isLoggedIn ? <Home /> : <Redirect to="/" />}
            </Route>
            <Route path="/register">
              {isLoggedIn ? <Redirect to="/home" /> : <Register />}
            </Route>
            <Route path="/profile">
              {isLoggedIn ? <Profile /> : <Redirect to="/" />}
            </Route>

            <Route path="/">
              {isLoggedIn ? <Redirect to="/home" /> : <Login />}
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
