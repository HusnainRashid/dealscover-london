// navbar on homepage : login and sign up button 

import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";


const Navbar = () => {
    // const [searchTerm, setSearchTerm] = useState('');
    // const [searchResults, setSearchResults] = useState([]);

    // const handleSignOut = () => {
    //   window.localStorage.removeItem("token");
    //   window.location.href = "/login";
    // };
      return (
      <div align="right">
          <a href="/login-page">
          <button type="submit">
            <i class="login">Login</i>
            <Link to="login">Login</Link>
          </button>
        </a>
        <a href="/signup-page">
          <button type="submit">
            <i class="signup">Signup</i>
            <Link to="signup">Signup</Link>
          </button>
        </a>
      </div>
    );
};


export default Navbar;

