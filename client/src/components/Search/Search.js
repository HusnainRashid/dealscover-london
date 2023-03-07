import React from "react";
import './Search.css'
import { ReactComponent as SearchIcon } from "../../assets/icons/search_FILL0_wght100_GRAD-25_opsz48.svg";

const Search = () => {
  const handleInputChange = (event) => {
    const value = event.target.value;
    document.getElementById("value").innerHTML = value;
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const location = event.target.elements.location.value;
    const date = event.target.elements.date.value;
    const price = event.target.elements.pi_input.value;

    const radius = 5; // Search radius in kilometers
    const [latitude, longitude] = location.split(",").map((coord) => parseFloat(coord.trim()));

    Event.aggregate([
      {
        $geoNear: {
          near: { type: "Point", coordinates: [longitude, latitude] },
          distanceField: "distance",
          spherical: true,
          maxDistance: radius * 1000, // Convert radius to meters
        },
      },
      {
        $match: {
          date: new Date(date),
          price: { $lte: price },
        },
      },
    ])
      .then((results) => {
        console.log("Events found:", results);
      })
      .catch((error) => {
        console.error("Error finding events:", error);
      });
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
<form onSubmit={handleSearch} className="search-form">
  <button className="btn btn-dark search-btn" type="button" onClick={handleLocationSearch}>
    Use Location
  </button>
  <input type="date" data-testid="date" name="date" className="search-input" />
  <input type="range" data-testid="pi_input" min="0" max="100" step="5" onChange={handleInputChange} className="search-input" />
  <output id="value" style={{ marginLeft: "10px" }}></output>
  <button type="submit" data-testid="search-btn" className="btn btn-dark search-btn">search</button>
</form>
  );
};

export default Search;

