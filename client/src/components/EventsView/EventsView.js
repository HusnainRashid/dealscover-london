import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import { ReactComponent as MusicIcon } from "../../assets/icons/mic.svg";
import { ReactComponent as SportsIcon } from "../../assets/icons/sports_volleyball.svg";
import { ReactComponent as DiningIcon } from "../../assets/icons/restaurant.svg";
import { ReactComponent as ArtsIcon } from "../../assets/icons/palette.svg";
import { ReactComponent as NightIcon } from "../../assets/icons/nightlife.svg";
import { ReactComponent as AttractionsIcon } from "../../assets/icons/attractions.svg";
import { ReactComponent as FamilyIcon } from "../../assets/icons/family_friendly.svg";
import { ReactComponent as ArenaIcon } from "../../assets/icons/stadium.svg";
import { ReactComponent as FilmIcon } from "../../assets/icons/movie.svg";
import { ReactComponent as SpaIcon } from "../../assets/icons/spa.svg";
import { ReactComponent as AdultIcon } from "../../assets/icons/age18.svg";
// import { ReactComponent as TheatreIcon } from "../../assets/icons/theatres.svg";

const EventsView = () => {
  const [events, setEvents] = useState([]);
  const [selectedCategory, setCategory] = useState("");
  const [token, setToken] = useState(window.localStorage.getItem("token"));

    useEffect(() => {
        fetch("/events")
        .then(response => response.json())
        .then(async data => {
          window.localStorage.setItem("token", data.token);
          setToken(window.localStorage.getItem("token"));
          setEvents(data.events);
        })
      }, []);

    const handleCategoryClick = (category) =>{
      setCategory(category);
    };


    const filteredEvents = selectedCategory
    ? events.filter((event) => event.genre === selectedCategory)
    : events;
    return (
      <>
      <div>
        <div className="btn-group">
        <button className="btn btn-dark" onClick={() => handleCategoryClick("Music")}><MusicIcon />Music</button>
        <button className="btn btn-dark" onClick={() => handleCategoryClick("Sport")}><SportsIcon />Sports</button>
        {/* <button className="btn btn-dark" onClick={() => handleCategoryClick("Theatre")}><TheatreIcon />Theatre</button> */}
        <button className="btn btn-dark" onClick={() => handleCategoryClick("Arts")}><ArtsIcon />Arts</button>
        <button className="btn btn-dark" onClick={() => handleCategoryClick("Nightlife")}><NightIcon />Nightlife</button>
        <button className="btn btn-dark" onClick={() => handleCategoryClick("Film")}><FilmIcon />Film</button>
        <button className="btn btn-dark" onClick={() => handleCategoryClick("Retreats")}><SpaIcon />Retreats</button>
        <button className="btn btn-dark" onClick={() => handleCategoryClick("Family")}><FamilyIcon />Family</button>
      </div>
      </div><br></br><br></br>
        <div>
          <div className="container">
            {filteredEvents.map((event) =>(
              <div className="card text-bg-dark mb-3 p-3" key={event._id}>
                <h5 className="card-header">{event.name}</h5>
                <p>Type: {event.genre}, {event.subgenre}</p>
                <p>Minimum Price: {event.priceRange[0].min === 0 ? "Free" : `£${event.priceRange[0].min}`}</p>
                <p className="card-text">Postcode: {event.postCode}</p>
                
                <br />
                <a href={`/event/${event._id}`} target='_blank' rel='noreferrer'><button className="btn btn-light">
                  View details
                </button></a>
                <br />
                <a href={`https://${event.url}`} target='_blank' rel='noreferrer'><button className="btn btn-light">
                  Grab a ticket here!
                </button></a>
              </div>
            ))}
          </div>
        </div>
      </>
    );
};

export default EventsView;
