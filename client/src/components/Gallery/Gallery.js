import IconsMenu from "../IconsMenu/IconsMenu";
import React, { useState } from "react";
import "./Gallery.css";
import EventsView from "../EventsView/EventsView";
import Navbar from "../navbar/Navbar"

const Gallery = () => {
  return (
    <>
    <Navbar /><br></br>
    <body>
      <br></br>
    <IconsMenu /><br></br>
    <main>
      <div className="gallery">
        <EventsView />
      </div>
    </main>
    </body>
    </>
  );
};

export default Gallery;
