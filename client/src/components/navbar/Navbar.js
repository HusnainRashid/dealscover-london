import React from "react";
import './Navbar.css';
import {NavLink} from "react-router-dom"

const handleLogOut = () => {
  window.localStorage.removeItem("token");
  window.location.href = "/login";
};



const Navbar = () => {
  
  const token = window.localStorage.getItem("token");

  if (token) {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              Dealscover London
            </NavLink>
            <NavLink to="/login">
              <button onClick={handleLogOut} className="btn btn-outline-secondary">
                <i data-testid="logout" className="logout">
                  Log out
                </i>
              </button>
            </NavLink>
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Dealscover London
            </a>
            <NavLink to="/login">
              <button
                type="submit"
                className="btn btn-outline-secondary"
                data-testid="login">
                 Log in
              </button>
            </NavLink>
            <NavLink to="/signup">
              <button type="submit" className="btn btn-outline-dark" data-testid="signup">Sign Up
              </button>
            </NavLink>
          </div>
        </nav>
      </div>
    );
  }
};

export default Navbar;
