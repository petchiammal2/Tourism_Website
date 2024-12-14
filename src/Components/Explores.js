import React from "react";
import "./CSS/Explore.css";

import MountainImage from "../Assets/Mountain.jpg";
import BeachImage from "../Assets/beach.jpg";
import IslandImage from "../Assets/island.jpg";
import SunsetImage from "../Assets/sunset.jpg"
import CountrysideImage from "../Assets/countryside.jpg";
import cliffImage from "../Assets/cliff.jpg";



const Explore = () => {
  return (

    
      <section className="explore-grid">
        <div className="grid-item">
          <img src={MountainImage} alt="Mountain" className="grid-image" />
          <h3 className="grid-title">Mountains</h3>
        </div>
        <div className="grid-item">
          <img src={BeachImage} alt="Beach" className="grid-image" />
          <h3 className="grid-title">Beach</h3>
        </div>
        <div className="grid-item">
          <img src={IslandImage} alt="island" className="grid-image" />
          <h3 className="grid-title">Island</h3>
        </div>
        <div className="grid-item">
          <img src={SunsetImage} alt="sunset" className="grid-image" />
          <h3 className="grid-title">Sunset</h3>
        </div>
        <div className="grid-item">
          <img src={CountrysideImage} alt="countryside" className="grid-image" />
          <h3 className="grid-title">countryside</h3>
        </div>
        <div className="grid-item">
          <img src={cliffImage} alt="cliff" className="grid-image" />
          <h3 className="grid-title">cliff</h3>
        </div>
      </section>
  );
};

export default Explore;
