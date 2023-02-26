import React, { useState } from "react";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control"
        type="text"
        value={query}
        onChange={handleInputChange}
        name="search"
        placeholder="Search..."
      ></input>
      <br></br>
    </form>
  );
};

export default Search;
