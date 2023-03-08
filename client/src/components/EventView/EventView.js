import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const EventView = () => {
  const {id} = useParams()
  const [event, setEvent] = useState([])
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  useEffect(() => {
    fetch(`/events/${id}`)
    .then(response => response.json())
    .then(async data => {
      window.localStorage.setItem("token", data.token);
      setToken(window.localStorage.getItem("token"));
      setEvent(data.event);
    })
  }, [])

  return (
    <div>
      <p>{event._id}</p>
    </div>
  );
};

export default EventView;
