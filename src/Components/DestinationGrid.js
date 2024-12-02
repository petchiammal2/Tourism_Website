import React from "react";
import "./CSS/DestinationGrid.css";

import Thailand from "../Assets/Thailand.jpg";
import Switzerland from "../Assets/Switzerland.jpg";
import Australia from "../Assets/Austraila.jpg";
import china from "../Assets/china.jpg";
import France from "../Assets/France.jpg";

const DestinationGrid = () => {
  const destinations = [
    {
      title: "Bali, Indonesia",
      image: Thailand,
      description: "Explore the serene beaches, temples, and vibrant culture of Bali.",
    },
    {
      title: "Paris, France",
      image: Switzerland,
      description: "Discover the romantic city of Paris with its iconic Eiffel Tower and cafes.",
    },
    {
      title: "Tokyo, Japan",
      image: china,
      description: "Experience the futuristic cityscapes and rich tradition of Tokyo.",
    },
    {
      title: "Sydney, Australia",
      image: Australia,
      description: "Visit the famous Sydney Opera House and Bondi Beach.",
    },
    {
      title: "New York City, USA",
      image: France,
      description: "Enjoy the bustling streets of Manhattan and iconic landmarks like Times Square.",
    },
    
  ];

  return (
    <div className="tourism-grid">
      {destinations.map((destination, index) => (
        <div key={index} className="tourism-item">
          <img
            src={destination.image}
            alt={destination.title}
            className="tourism-image"
            />
          <h3 className="tourism-title">{destination.title}</h3>
          <p className="tourism-description">{destination.description}</p>
          <a href={destination.link} className="read-more">
          Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default DestinationGrid;
