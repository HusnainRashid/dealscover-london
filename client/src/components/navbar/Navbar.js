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
              <img src="https://i.postimg.cc/cLkBxnsh/Dealscover-2.png" alt="Dealscover London Logo" height="30" />
            </NavLink>
            <NavLink to="/login">
              <button onClick={handleLogOut} className="btn btn-outline-secondary">
              <i class="bi bi-box-arrow-right"></i>Log out
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
        <img src="https://i.postimg.cc/cLkBxnsh/Dealscover-2.png" alt="Dealscover London Logo" height="30" />
      </a>
      <div className="navbar-button">
        <NavLink to="/login">
          <button type="submit" className="btn btn-outline-dark" data-testid="login">
          <i class="bi bi-box-arrow-in-left"></i>Log in
          </button>
        </NavLink>
        <NavLink to="/signup">
          <button type="submit" className="btn btn-outline-dark" data-testid="signup">
          <i class="bi bi-pen-fill"></i>Sign Up
          </button>
        </NavLink>
      </div>
    </div>
  </nav>
</div>

    );
  }
};

export default Navbar;
