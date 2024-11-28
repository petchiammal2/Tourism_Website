// DestinationGrid.js
import React from "react";
import DestinationCard from "../Components/Destinationcard";
import "./CSS/DestinationGrid.css";

const DestinationGrid = () => {
  const destinations = [
    { id: 1, image: require( "../Assets/Thailand.jpg"), name: "Thailand" },
    { id: 2, image: require("../Assets/china.jpg"), name: "China" },
    { id: 3, image: require("../Assets/France.jpg"), name: "France" },
    { id: 4, image: require("../Assets/Austraila.jpg"), name: "Austraila" },
    { id: 5, image:require( "../Assets/Switzerland.jpg"), name: "Switzerland" },
    { id: 6, image:require( "../Assets/norway.jpg"), name: "Norway" },
  ];

  return (
    <section className="destination-grid">
      <h2>Explore Our Destinations</h2>
      <div className="grid">
        {destinations.map((dest) => (
          <DestinationCard key={dest.id} destination={dest} />
        ))}
      </div>
    </section>
  );
};

export default DestinationGrid;
