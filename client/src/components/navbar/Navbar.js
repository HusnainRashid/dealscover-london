// navbar on homepage : login and sign up button 

import React, { useState } from "react";
import './Navbar.css';

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSignOut = () => {
      window.localStorage.removeItem("token");
      window.location.href = "/login";
    };
      return (
      <div align="right">
          <a href="/login-page">
          <button type="submit">
            <i class="login">Login</i>
          </button>
          <input
          data-testid="login"
          />
        </a>
        <a href="/signup-page">
          <button type="submit">
            <i class="signup">Signup</i>
          </button>
          <input
          data-testid="signup"
          />
        </a>
      </div>
    );
};


export default Navbar;
