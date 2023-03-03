import React from "react";
import './Search.css';

const Search = () => {
  

  const handleSubmit = (event) => {
    event.preventDefault();
   

    const location = event.target.elements.location.value;
    const date = event.target.elements.date.value;
    const price = event.target.elements.pi_input.value;

    handleSearch(location, date, price);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    document.getElementById("value").innerHTML = value;
  };

  const handleSearch = (location, date, price) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  };

  const handleLocationSearch = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = `${position.coords.latitude}, ${position.coords.longitude}`;
        const date = new Date().toISOString().slice(0, 10);
        const price = document.getElementById("value").innerHTML;
        handleSearch(location, date, price);
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  };
  
  return (
  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'row' }}>
  <label htmlFor="location">Location:</label>
  <input type="text" data-testid="location" placeholder="Enter your postcode" />
  <button type="button" className="search-btn" onClick={handleLocationSearch}>
        Find my Location
  </button>

  <label htmlFor="date">Date:</label>
  <input type="date" data-testid="date" name="date" />

  <label htmlFor="price">Price: </label>
  <output id="value"></output>
  <input type="range" data-testid="pi_input" min="0" max="100" step="0.25" style={{ width: '200px' }} onChange={handleInputChange} />

 

  <button type="submit" data-testid="search-btn" className="search-btn">Search</button>
</form>

  );
};

export default Search;

