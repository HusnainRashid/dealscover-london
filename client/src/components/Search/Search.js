// import React from "react";
// import './Search.css'
// import { ReactComponent as SearchIcon } from "../../assets/icons/search_FILL0_wght100_GRAD-25_opsz48.svg";

// const Search = () => {
//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     document.getElementById("value").innerHTML = value;
//   };

//   const handleSearch = (event) => {
//     event.preventDefault();
//     const location = event.target.elements.location.value;
//     // const date = event.target.elements.date.value;
//     // const price = event.target.elements.pi_input.value;

//     const radius = 5; // Search radius in kilometers
//     const [latitude, longitude] = location.split(",").map((coord) => parseFloat(coord.trim()));
//   };

//   const handleLocationSearch = () => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const location = `${position.coords.latitude}, ${position.coords.longitude}`;
//         const date = new Date().toISOString().slice(0, 10);
//         const price = document.getElementById("value").innerHTML;
//         handleSearch(location, date, price);
//       },
//       (error) => {
//         console.error("Error getting user location:", error);
//       }
//     );
//   };
  
//   return (

// <form onSubmit={handleSearch} className="search-form">
//   <button className="btn btn-dark search-btn" type="button" onClick={handleLocationSearch}>
//     Use Location
//   </button>
//   <input type="date" data-testid="date" name="date" className="search-input" />
//   <input type="range" data-testid="pi_input" min="0" max="100" step="5" onChange={handleInputChange} className="search-input" />
//   <output id="value" style={{ marginLeft: "10px" }}></output>
//   <button type="submit" data-testid="search-btn" className="btn btn-dark search-btn">search</button>
// </form>

//   );
// };

// export default Search;


// import React from "react";
// import './Search.css'
// // import { ReactComponent as SearchIcon } from "../../assets/icons/search_FILL0_wght100_GRAD-25_opsz48.svg";

// const Search = () => {
//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     document.getElementById("value").innerHTML = value;
//   };

//   const handleSearch = (location, date, price) => {
//     navigator.geolocation.getCurrentPosition((position) => {
//       const latitude = position.coords.latitude;
//       const longitude = position.coords.longitude;
//       const url = `https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&latlong=${latitude},${longitude}&locale=*&radius=50`;
//     const radius = 5; // Search radius in kilometers
//     // const [latitude, longitude] = location.split(",").map((coord) => parseFloat(coord.trim()));
//     // Use the latitude and longitude values here to perform the search
//   };

//   const handleLocationSearch = () => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const location = `${position.coords.latitude}, ${position.coords.longitude}`;
//         const date = new Date().toISOString().slice(0, 10);
//         const price = document.getElementById("value").innerHTML;
//         handleSearch(location, date, price);
//       },
//       (error) => {
//         console.error("Error getting user location:", error);
//       }
//     );
//   };
  
//   return (
//     <form onSubmit={handleSearch} className="search-form">
//       <button className="btn btn-dark search-btn" type="button" onClick={handleLocationSearch}>
//         Use Location
//       </button>
//       <input type="date" data-testid="date" className="search-input" />
//    <input type="range" data-testid="pi_input" min="0" max="100" step="5" onChange={handleInputChange} className="search-input" />
//    <output id="value" style={{ marginLeft: "10px" }}></output>
//    <button type="submit" data-testid="search-btn" className="btn btn-dark search-btn">search</button>
//  </form>

//   );
// };

// export default Search;

// import React from "react";
// import './Search.css'

// const Search = () => {
  
//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     document.getElementById("value").innerHTML = value;
//   };

//   const handleSearch = (event) => {
//     // event.preventDefault(); // Prevent the default form submission behavior
//     navigator.geolocation.getCurrentPosition((position) => {
//       const latitude = position.coords.latitude;
//       const longitude = position.coords.longitude;
//       const url = `https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&latlong=${latitude},${longitude}&locale=*&radius=50`;
//       const radius = 5; // Search radius in kilometers
//       const date = document.getElementById("date").value;
//       const price = document.getElementById("value").innerHTML;
//       // Use the latitude and longitude values here to perform the search
//     }, (error) => {
//       console.error("Error getting user location:", error);
//     });
//   };

//   const handleLocationSearch = (event) => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const location = `${position.coords.latitude}, ${position.coords.longitude}`;
//         const date = new Date().toISOString().slice(0, 10);
//         const price = document.getElementById("value").innerHTML;
//         handleSearch(location, date, price);
//       },
//       (error) => {
//         console.error("Error getting user location:", error);
//       }
//     );
//   };
  

// last attempt

// import React, { useState } from "react";
// import './Search.css';

// const Search = () => {
//   const [location, setLocation] = useState("");
//   const [events, setEvents] = useState([]);

//   const handleLocationChange = (event) => {
//     setLocation(event.target.value);
//   };

//   const handleSearch = async () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(async (position) => {
//         const lat = position.coords.latitude;
//         const lng = position.coords.longitude;

//         try {
//           const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=YOUR_API_KEY&latlong=${lat},${lng}&radius=10&unit=miles`);
//           const data = await response.json();
//           setEvents(data._embedded.events);
//         } catch (error) {
//           console.error(error);
//         }
//       }, (error) => {
//         console.error('Error getting user location:', error);
//       });
//     } else {
//       alert("Geolocation is not supported by this browser.");
//     }
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     handleSearch();
//   };
//   return (
//     <form onSubmit={handleSearch} className="search-form">
//       <button className="btn btn-dark search-btn" type="button" onClick={handleLocationSearch}>
//         Use Location
//       </button>
//       <input id="date" type="date" data-testid="date" className="search-input" />
//       <input type="range" data-testid="pi_input" min="0" max="100" step="5" onChange={handleInputChange} className="search-input" />
//       <output id="value" style={{ marginLeft: "10px" }}></output>
//       <button type="submit" data-testid="search-btn" className="btn btn-dark search-btn">search</button>
//     </form>
//   );
// };

// export default Search;


//last event x4

// import React, { useState } from "react";
// import './Search.css';

// const Search = () => {
//   const [location, setLocation] = useState("");
//   const [events, setEvents] = useState([]);

//   const handleLocationSearch = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(async (position) => {
//         const lat = position.coords.latitude;
//         const lng = position.coords.longitude;

//         try {
//           const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=YOUR_API_KEY&latlong=${lat},${lng}&radius=10&unit=miles`);
//           const data = await response.json();
//           setEvents(data._embedded.events);
//         } catch (error) {
//           console.error(error);
//         }
//       }, (error) => {
//         console.error('Error getting user location:', error);
//       });
//     } else {
//       alert("Geolocation is not supported by this browser.");
//     }
//   };
//   const handleSearch = async () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(async (position) => {
//         const lat = position.coords.latitude;
//         const lng = position.coords.longitude;
  
//         try {
//           const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=YOUR_API_KEY&latlong=${lat},${lng}&radius=10&unit=miles`);
//           const data = await response.json();
//           setEvents(data._embedded.events);
//         } catch (error) {
//           console.error(error);
//         }
//       }, (error) => {
//         console.error('Error getting user location:', error);
//       });
//     } else {
//       alert("Geolocation is not supported by this browser.");
//     }
//   };
  
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     const date = event.target.date.value;
//     const pi = event.target.pi_input.value;
//     try {
//       const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=YOUR_API_KEY&latlong=${location}&radius=${pi}&unit=miles&startDateTime=${date}`);
//       const data = await response.json();
//       setEvents(data._embedded.events);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     document.getElementById("value").innerHTML = value;
//   };

//   return (
//     <form onSubmit={handleFormSubmit} className="search-form">
//       <button className="btn btn-dark search-btn" type="button" onClick={handleLocationSearch}>
//         Use Location
//       </button>
//       <input id="date" type="date" data-testid="date" className="search-input" />
//       <input type="range" data-testid="pi_input" min="0" max="100" step="5" onChange={handleInputChange} className="search-input" />
//       <output id="value" style={{ marginLeft: "10px" }}></output>
//       <button type="submit" data-testid="search-btn" className="btn btn-dark search-btn">search</button>
//     </form>
//   );
// };

// export default Search;

//la

import React, { useState } from "react";
import './Search.css';

const Search = () => {
const [location, setLocation] = useState("");
const [events, setEvents] = useState([]);

const handleLocationSearch = () => {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(async (position) => {
const lat = position.coords.latitude;
const lng = position.coords.longitude;
try {
  const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=YOUR_API_KEY&latlong=${lat},${lng}&radius=10&unit=miles`);
  const data = await response.json();
  setEvents(data._embedded.events);
} catch (error) {
  console.error(error);
}
}, (error) => {
console.error('Error getting user location:', error);
});
} else {
alert("Geolocation is not supported by this browser.");
}
};
const handleSearch = async () => {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(async (position) => {
const lat = position.coords.latitude;
const lng = position.coords.longitude;
try {
  const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=YOUR_API_KEY&latlong=${lat},${lng}&radius=10&unit=miles`);
  const data = await response.json();
  setEvents(data._embedded.events);
} catch (error) {
  console.error(error);
}
}, (error) => {
console.error('Error getting user location:', error);
});
} else {
alert("Geolocation is not supported by this browser.");
}
};

const handleFormSubmit = async (event) => {
event.preventDefault();
if (!event.target) return;
const date = event.target.date.value;
const pi = event.target.pi_input.value;
try {
const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=YOUR_API_KEY&latlong=${location}&radius=${pi}&unit=miles&startDateTime=${date}`);
const data = await response.json();
setEvents(data._embedded.events);
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
console.log(`Latitude: ${lat}, Longitude: ${lng}`);
},
(error) => {
console.error('Error getting user location:', error);
}
);
} else {
alert("Geolocation is not supported by this browser.");
}
};

return (
<form onSubmit={handleFormSubmit} className="search-form">
<button className="btn btn-dark search-btn" type="button" onClick={getUserLocation}>
Use Location
</button>
Date of Event:<input id="date" type="date" data-testid="date" className="search-input" /> Budget:
<input type="range" data-testid="pi_input" min="0" max="100" step="5" onChange={handleInputChange} className="search-input" />
<output id="value" style={{ marginLeft: "10px" }}></output>
<button type="submit" data-testid="search-btn" className="btn btn-dark search-btn">search</button>
</form>
);
};

export default Search;