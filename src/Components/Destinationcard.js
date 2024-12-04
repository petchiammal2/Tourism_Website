// DestinationCard.js
import React from "react";
import "./CSS/Destinationcard.css"; 


const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card">
      <img src={destination.image} alt={destination.name} />
      <h3>{destination.name}</h3>
    </div>
  );
};

export default DestinationCard;
