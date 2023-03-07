import React from "react";
import { useParams } from "react-router-dom";

const EventView = ({ event }) => {
  const {id} = useParams()
  return (
    <div>
      <p>Event - {id}</p>
    </div>
  );
};

export default EventView;
