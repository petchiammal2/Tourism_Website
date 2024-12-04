import React from "react";
import "./CSS/Explore.css";

const Explore = () => {
  const destinations = [
    { name: "Beach Paradise", img: require("../Assets/beach.jpg") },
    { name: "Tropical Escape", img: require("../Assets/tropical.jpg") },
    { name: "Mountain Retreat", img: require("../Assets/Mountain.jpg") },
    { name: "Cultural Wonders", img: require("../Assets/culture.jpg") },
    { name: "Rainforest Adventure", img: require("../Assets/rainforest.jpg") },
    { name: "City Nights", img: require("../Assets/city.jpg") },
    { name: "Desert Oasis", img: require("../Assets/desert.jpg") },
    { name: "Snowy Peaks", img: require("../Assets/snow.jpg") },
    { name: "Island Getaway", img: require("../Assets/island.jpg") },
    { name: "Historic Landmarks", img: require("../Assets/historical.jpg") },
    { name: "Ocean Bliss", img: require("../Assets/underwater.jpg") },
    { name: "Urban Skylines", img: require("../Assets/skylines.jpg") },
    { name: "Wildlife Safari", img: require("../Assets/safari.jpg")},   
     { name: "Sunset Valley", img: require("../Assets/sunset.jpg") },
     { name: "Secluded Lagoon", img: require("../Assets/lagoon.jpg") },




  ];

  return (
    <div className="explore-page">
      
      <div className="main-content">
        <div className="header">
          <h1>Explore Destinations</h1>
          <div className="nav-buttons">
            <button>Themes</button>
            <button>Adventure</button>
            <button>Culture</button>
          </div>
        </div>
        <div className="grid">
          {destinations.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
