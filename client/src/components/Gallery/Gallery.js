import IconsMenu from "../IconsMenu/IconsMenu";
import React, { useState } from "react";
import "./Gallery.css";
import EventsView from "../EventsView/EventsView";
import Navbar from "../navbar/Navbar"
import Search from "../Search/Search";

const Gallery = () => {
  return (
    <>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Navbar /><br></br><br></br><br></br><br></br><br></br>
    </div>
    <body>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Search />
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
