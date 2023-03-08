// import React, { useState } from "react";
// import "./Search.css";

// const Search = () => {
//   const [location, setLocation] = useState("");
//   const [events, setEvents] = useState([]);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     if (!event.target) return;
//     const date = event.target.date.value;
//     const pi = event.target.pi_input.value;

//     // const [latitude, longitude] = location.split(",").map((coord) => parseFloat(coord.trim()));
//     // const radius = 5;

//     try {
//       // You can use the values entered by the user to filter the data later
//       // For now, set the events array to an empty array
//       setEvents([]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     document.getElementById("value").innerHTML = value;
//   };

//   const getUserLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const lat = position.coords.latitude;
//           const lng = position.coords.longitude;

//           location.split(",").map((coord) => parseFloat(coord.trim()));
//           const radius = 5;
//           console.log(`Latitude: ${lat}, Longitude: ${lng}`);
//           // Set the location state to the user's current location
//           setLocation(`${lat},${lng}`);
//         },
//         (error) => {
//           console.error("Error getting user location:", error);
//         }
//       );
//     } else {
//       alert("Geolocation is not supported by this browser.");
//     }
//   };

//   return (
//     <form onSubmit={handleFormSubmit} className="search-form">
//       <button className="btn btn-dark search-btn" type="button" onClick={getUserLocation}>
//         Use Location
//       </button>
//       Date of Event:
//       <input id="date" type="date" data-testid="date" className="search-input" />
//       Budget:
//       <input type="range" data-testid="pi_input" min="0" max="100" step="5" onChange={handleInputChange} className="search-input" />
//       <output id="value" style={{ marginLeft: "10px" }}></output>
//       <button type="submit" data-testid="search-btn" className="btn btn-dark search-btn">search</button>
//     </form>
//   );
// };

// export default Search;

import React, { useState, useEffect } from "react";
import "./Search.css";

const Search = () => {
  const [location, setLocation] = useState("");
  const [events, setEvents] = useState([]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!event.target) return;
    const date = event.target.date.value;
    const pi = event.target.pi_input.value;

    // const [latitude, longitude] = location.split(",").map((coord) => parseFloat(coord.trim()));
    // const radius = 5;

    try {
      // You can use the values entered by the user to filter the data later
      // For now, set the events array to an empty array
      setEvents([]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    document.getElementById("value").innerHTML = value;
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          location.split(",").map((coord) => parseFloat(coord.trim()));
          const radius = 5;
          console.log(`Latitude: ${lat}, Longitude: ${lng}`);
          // Set the location state to the user's current location
          setLocation(`${lat},${lng}`);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    if (location) {
      const [latitude, longitude] = location.split(",").map((coord) => parseFloat(coord.trim()));
      const radius = 5;
      fetch(`/events?longitude=${longitude}&latitude=${latitude}&radius=${radius}`)
        .then((response) => response.json())
        .then((data) => {
          window.localStorage.setItem("token", data.token);
          setEvents(data.events);
        });
    } else {
      fetch("/events")
        .then((response) => response.json())
        .then((data) => {
          window.localStorage.setItem("token", data.token);
          setEvents(data.events);
        });
    }
  }, [location]);

  return (
    <form onSubmit={handleFormSubmit} className="search-form">
      <button className="btn btn-dark search-btn" type="button" onClick={getUserLocation}>
        Use Location
      </button>
      Date of Event:
      <input id="date" type="date" data-testid="date" className="search-input" />
      Budget:
      <input type="range" data-testid="pi_input" min="0" max="100" step="5" onChange={handleInputChange} className="search-input" />
      <output id="value" style={{ marginLeft: "10px" }}></output>
      <button type="submit" data-testid="search-btn" className="btn btn-dark search-btn">search</button>
    </form>
  );
};

export default Search;
