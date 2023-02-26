import React, { useState } from "react";
import { ReactComponent as MusicIcon } from '../../assets/icons/music_note.svg'
import { ReactComponent as SportsIcon } from "../../assets/icons/sports_soccer.svg";
import { ReactComponent as DiningIcon } from "../../assets/icons/restaurant.svg";
import { ReactComponent as ArtsIcon } from "../../assets/icons/palette.svg";
import { ReactComponent as NightIcon } from "../../assets/icons/nightlife.svg";
import { ReactComponent as AttractionsIcon } from "../../assets/icons/attractions.svg";
import { ReactComponent as FamilyIcon } from "../../assets/icons/diversity_family.svg";

import './IconsMenu.css';




const IconsMenu = () => {
  return (
    <div className="btn-group btn-group-lg">
      <a href="/music">
        <button type="submit" className="btn custom-outline">
          <MusicIcon />
        </button>
      </a>
      <br></br>
      <a href="/sports">
        <button type="submit" className="btn custom-outline">
          <SportsIcon />
        </button>
      </a>

      <a href="/food-and-drink">
        <button type="submit" className="btn custom-outline">Food
          <DiningIcon />
         
        </button>
     
      </a>
      <a href="/visual-arts">
        <button type="submit" className="btn custom-outline">
          <ArtsIcon />
        </button>
      </a>
      <a href="/nightlife">
        <button type="submit" className="btn custom-outline">
          <NightIcon />
        </button>
      </a>
      <a href="/attractions">
        <button type="submit" className="btn custom-outline">
          <AttractionsIcon />
        </button>
      </a>
      <a href="/family">
        <button type="submit" className="btn custom-outline">
          <FamilyIcon />
        </button>
      </a>
    </div>
  );
};

export default IconsMenu;
