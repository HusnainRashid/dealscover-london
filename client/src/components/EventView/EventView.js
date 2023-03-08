import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const EventView = () => {
  const {id} = useParams()
  const [event, setEvent] = useState([])

  useEffect(() => {
    fetch(`/events/${id}`)
    .then(response => response.json())
    .then(async data => {
      setEvent(data);
    })
  }, [])

  return (
    <div>
      <h1>{event.name}</h1>
      <h2>{event.description}</h2>
      <h3>Genre: {event.genre}, {event.subgenre}</h3>
      <h3>Accessibility: {event.accessibility}</h3>
      <h3>Age restriction: {event.ageRestricted}</h3>
      <h3>Address: {event.venueAddress}, {event.postCode}</h3>
      <h3>
        Minimum Price: {event.priceRange[0].min === 0 ? "Free" : `£${event.priceRange[0].min}`}
      </h3>
      <h3>
        Maximum Price: {event.priceRange[0].max === 0 ? "" : `£${event.priceRange[0].max}`} 
      </h3>
      <a href={`https://${event.url}`} target='_blank' rel='noreferrer'><button className="btn btn-light">
                  Grab a ticket here!
                </button></a>
  
    </div>
  );
};

export default EventView;
