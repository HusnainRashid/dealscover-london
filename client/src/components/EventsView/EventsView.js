import React, { useEffect, useState } from "react";

const EventsView = () => {
  const [events, setEvents] = useState([]);

    useEffect(() => {

      fetch("/events")
      .then(response => response.json())
      .then(async data => {
        setEvents(data.events);
      })
    }, []);

  return (
    <div>
      <h5>Events</h5>
      <ul>
        {events.map((event) =>(
          <li key={event._id}>{event.name}<br></br>
            Type: {event.genre}, {event.subgenre}<br></br>
            Minimum Price: {event.priceRange[0].min === 0 ? "Free" : `£${event.priceRange[0].min}`}<br></br>
            Postcode: {event.postCode}<br></br>
            <button>
              <a href={`https://${event.url}`} target='_blank' rel='noreferrer'>Grab a ticket here!</a>
            </button>
          </li>
        ))}
      </ul>
      <img src="https://i.postimg.cc/BnMLZpWz/Rectangle-1.png" alt="" />
    </div>
  );
};

export default EventsView;
