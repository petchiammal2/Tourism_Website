import React from "react";
import "./CSS/Explore.css";

const destinations = [
  { name: "Beach Paradise", img: require("../Assets/beach.jpg") },
  { name: "Mountain Adventure", img:require ("../Assets/Mountain.jpg") },
  { name: "City Lights", img: require("../Assets/city.jpg") },
  { name: "Tropical Escape", img:require("../Assets/tropical.jpg") },
  { name: "Snowy Peaks", img: require("../Assets/snow.jpg") },
  { name: "Desert Oasis", img:require( "../Assets/desert.jpg") },
  { name: "Rainforest Retreat", img:require( "../Assets/rainforest.jpg" )},
  { name: "Island Getaway", img: require("../Assets/island.jpg" )},
  { name: "Cultural Wonders", img: require("../Assets/culture.jpg") },
  { name: "Safari Adventure", img: require("../Assets/safari.jpg" )},
  { name: "Underwater World", img:require( "../Assets/underwater.jpg") },
  { name: "Historical Landmarks", img:require ("../Assets/historical.jpg") },
  { name: "Luxury Resorts", img: require("../Assets/resorts.jpg") },
  { name: "Hidden Villages", img: require("../Assets/village.jpg") },
  { name: "Lakeside Serenity", img:require ("../Assets/lake.jpg" )},
  { name: "Countryside Charm", img: require("../Assets/countryside.jpg" )},
  { name: "Cliffside Wonders", img:require ("../Assets/cliff.jpg") },
  
];

const Explore = () => {
  return (
    <div className="explore-container">
      <header className="explore-header">
        <h1>Explore</h1>
      </header>
      <div className="explore-content">
        <aside className="sidebar">
          <h2>Beach Paradise Destinations</h2>
          <p>Browse Destinations:</p>
          <ul>
            <li>Beaches</li>
            <li>Mountains</li>
            <li>Cities</li>
            <li>Historical</li>
          </ul>
          <button className="subscribe-button">Subscribe</button>
        </aside>
        <div className="destination-grid">
          {destinations.map((destination, index) => (
            <div className="destination-card" key={index}>
              <img src={destination.img} alt={destination.name} />
              <h3>{destination.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
