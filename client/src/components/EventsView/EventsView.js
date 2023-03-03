import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";

const EventsView = () => {
  const [events, setEvents] = useState([]);
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

    return (
      <>
        <div>
          <div className="container">
            {events.map((event) =>(
              <div className="card text-bg-dark mb-3 p-3" key={event._id}>
                <h5 className="card-header">{event.name}</h5>
                <p>Type: {event.genre}, {event.subgenre}</p>
                <p>Minimum Price: {event.priceRange[0].min === 0 ? "Free" : `£${event.priceRange[0].min}`}</p>
                <p className="card-text">Postcode: {event.postCode}</p>
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
