import IconsMenu from "../IconsMenu/IconsMenu";
import React, { useState } from "react";
import "./Gallery.css";
import EventsView from "../EventsView/EventsView";

const Gallery = () => {
  return (
    <main>
      <div className="gallery">
        <IconsMenu />
        <EventsView />

        <img src="https://i.postimg.cc/BnMLZpWz/Rectangle-1.png" alt="" />
      </div>
    </main>
  );
};

export default Gallery;
