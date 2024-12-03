import React from "react";
import "./CSS/DestinationGrid.css";

import Thailand from "../Assets/Thailand.jpg";
import Switzerland from "../Assets/Switzerland.jpg";
import Australia from "../Assets/Austraila.jpg";
import china from "../Assets/china.jpg";
import France from "../Assets/France.jpg";
import japan from "../Assets/japan.jpg";
import USA from "../Assets/USA.jpg";
import Italy from "../Assets/Italy.jpg";
import Newyork from "../Assets/Newyork.jpg";
import Maldives from "../Assets/Maldives.jpg";


const DestinationGrid = () => {
  const destinations = [
    {
      title: "Thailand",
      image: Thailand,
      description: " Thailand, known as the Land of Smiles, is a tropical paradise filled with cultural rfdiches, vibrant nightlife, and natural wonders. From the bustling streets.",
     },

      {
      title: "Switzerland",
      image: Switzerland,
      description: "Switzerland, a dreamlike destination in the heart of Europe, is famed for its snow-capped Alps, pristine lakes, and picturesque villages.",
    },
    {
      title: "China",
      image: china,
      description: "China, one of the world's oldest civilizations, is a country of rich heritage, diverse culture, and breathtaking landscapes. ",
    },
    {
      title: "Australia",
      image: Australia,
      description: "Australia, the land Down Under, is a paradise of unique landscapes, vibrant cities, and unparalleled wildlife. Known for traveller .",
    },

    {
      title: "France ",
      image: France,
      description: "France, often called the  Hexagon is a country of timeless beauty, rich history, and unrivaled sophistication. It is a dream destination for travelers seeking culture, art, and culinary delight.",
    },
    {
      title:"Maldives",
      image: Maldives,
      description:"Experience the pristine white sandy beaches, crystal-clear  and luxurious overwater villas of the Maldives.",

      
    },
    {
      title:"Japan",
      image:japan,
      description:" Japan, an island nation in East Asia, is renowned for its rich cultural heritage, cutting-edge technology. ",
    },
    
    {
      title:"USA",
      image:USA,
      description:"The United States, a vast and diverse nation in North America, is known  technological innovation.",
    },

    {
      title:"Italy",
      image:Italy,
      description:"Italy, located in southern Europe, is famous for its rich history, art, and culture,   Tower of Pisa.",
    },
    
    {
      title: "Newyork",
      image: Newyork ,
      description:"New York City is one of the most iconic and vibrant cities in the world, known for its impressive skyline .",
    },
  ]

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
