import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./EventView.css"

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
    <>
    <Navbar/><br></br><br></br><br></br>
    <div className = "container">
      <div className="card text-bg-dark mb-3 p-3">
        <h1 className="card-header">{event.name}</h1><br></br>
        <h3>{event.description}</h3><br></br>
        <h4>Genre: {event.genre}, {event.subgenre}</h4><br></br>
        <h4>Accessibility: {event.accessibility}</h4><br></br>
        <h4>Age restriction: {event.ageRestricted}</h4><br></br>
        <h4 className="card-text">Address: {event.venueAddress}, {event.postCode}, London</h4><br></br>
        <a href={`https://${event.url}`} target='_blank' rel='noreferrer'><button className="btn btn-light">
                    Grab a ticket here!
                  </button></a>
      </div>
    </div>

    <div>
      <a href="/gallery"><button className="btn btn-dark">View all events</button></a>
    </div>
    </>
    
    
  );
};

export default EventView;
