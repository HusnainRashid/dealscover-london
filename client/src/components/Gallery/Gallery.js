import IconsMenu from "../IconsMenu/IconsMenu";
import React, { useState } from "react";
import "./Gallery.css";
import EventsView from "../EventsView/EventsView";
import Navbar from "../navbar/Navbar"

const Gallery = () => {
  return (
    <>
    <Navbar />
    <body>
      <br></br>
    <IconsMenu />
    <main>
      <div className="gallery">
       
        <EventsView />

        <img src="https://i.postimg.cc/BnMLZpWz/Rectangle-1.png" alt="" />
      </div>
    </main>
    </body>
    </>
  );
};

export default Gallery;
