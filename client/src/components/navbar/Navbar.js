// navbar on homepage : login and sign up button 

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
      <div className="navbar">
         <NavLink to="/login">
            <button onClick={handleLogOut} className="logout">
              <i data-testid="logout" className="logout">Log out</i>
            </button>
      </NavLink>
      </div>
     
    )
  } else {
    return (
      <div className="navbar">
        <NavLink to="/login">
          <button type="submit">
            <i data-testid="login" className="login">Log in</i>
          </button>
        </NavLink>
        <NavLink to ="/signup">
          <button type="submit">
            <i data-testid="signup" className="signup">Sign up</i>
          </button>
        </NavLink>
      </div>
    );
  }
};

export default Navbar;
