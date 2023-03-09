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
        <div className="card-body">
        <h3>{event.description}</h3><br></br>
        <h5>Genre:</h5> <h4>{event.genre}, {event.subgenre}</h4><br></br>
        <h5>Accessibility:</h5><h4> {event.accessibility}</h4><br></br>
        <h5>Age restriction:</h5><h4> {event.ageRestricted}</h4><br></br>
        <h5>Venue:</h5><h4>{event.venueAddress}, {event.postCode}</h4><br></br>
        <div className="card-footer">
          <div className="d-flex justify-content-between">
          <a href={`https://${event.url}`} target='_blank' rel='noreferrer'>
            <button className="btn btn-light">
              <i class="bi bi-ticket-perforated"></i> Grab a ticket here!
            </button>
          </a>
          <a href='/gallery' rel='noreferrer'>
            <button className="btn btn-light">
              View all events
            </button>
          </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    </>
    
    
  );
};

export default EventView;
