import IconsMenu from "../IconsMenu/IconsMenu";
import React, { useState } from "react";
import "./Gallery.css";
import EventsView from "../EventsView/EventsView";
import Navbar from "../navbar/Navbar"
import Search from "../Search/Search";

const Gallery = () => {
  return (
    <>
    <Navbar /><br></br><br></br>
    <body>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  
    </div>
     
    <main>
      <div className="gallery"><br></br>
        <EventsView />
      </div>
    </main>
    </body>
    </>
  );
};

export default Gallery;
