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
        <div>
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <h1 className="display-4">
                thriftseekr<h4>LONDON</h4>
              </h1>
              <form className="d-flex"></form>
            </div>
          </nav>
        </div>
      );
};


export default Navbar;
