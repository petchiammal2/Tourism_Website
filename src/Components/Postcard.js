import React from "react";
import { Link } from "react-router-dom";


import "./CSS/Postcard.css";

import Switzerland from "../Assets/Switzerland.jpg";
import Austraila from "../Assets/Austraila.jpg";
import France from "../Assets/France.jpg";
import Maldives from "../Assets/Maldives.jpg";
import Italy from "../Assets/Italy.jpg";
import japan from "../Assets/japan.jpg";

const Postcard = () => {
  

  const destinations = [
    {
      title: "Switzerland",
      image: Switzerland,
      description: " Switzerland, located in the heart of Europe, is renowned for its stunning landscapes, political neutrality, and high standard of living. It is bordered by Germany to the north, France to the west, Italy to the south."
     }, 
    {
      title: "Austraila",
      image: Austraila,
      description: " Australia, located in the Southern Hemisphere, is both a country and a continent, known for its diverse landscapes, unique wildlife, and vibrant cities. It is the sixth-largest country in the world, bordered by the Indian Ocean ."
      },
    {
      title: "France",
      image: France,
      description:  " France, located in Western Europe, is one of the worlds most influential countries, known for its rich history, cultural heritage, and iconic landmarks. Bordered by Belgium, Luxembourg, Germany, Switzerland, Italy, Monaco, Spain, and the Atlantic Ocean, France offers a stunning variety of landscapces."
      },
    {
      title: "Maldives",
      image: Maldives,
      description:" The Maldives is known for its luxurious resorts, many of which are situated on private islands and offer overwater bungalows with direct access to the ocean. These resorts provide the ultimate in privacy and comfort, with world-class amenities and exceptional views, making the Maldives."
     },
    {
      title: "Italy",
      image: Italy,
      description: " Italy, located in Southern Europe,art, culture, and breathtaking landscapes. Shaped like a boot, Italy is surrounded by the Mediterranean Sea, bordered by France, Switzerland, Austria, and Slovenia to the north. "
     },
    {
      title: "japan",
      image: japan,
      description: " Japan, an island nation in East Asia, is known for its harmonious blend of ancient traditions and cutting-edge modernity. Located in the Pacific Ocean, Japan is composed of four main islands—Honshu."
     },
  ];

  return (
<section className="recent-locations">
      <h3>Recent Holiday Locations</h3>
    <div className="post-grid">
      {destinations.map((destination, index) => (
        <div key={index} className="post-item">
          <img
            src={destination.image}
            alt={destination.title}
            className="post-image"
          />
          <h3 className="post-title">{destination.title}</h3>
          
          <p className="Post-description">{destination.description}</p>
          <Link
            to="/about"
            state={{
              title: destination.title,
              description: destination.description,
              image: destination.image,
            }}
            className="read-more"
          >
            Read more
          </Link>
        </div>
    
      ))}
     
    </div>
    </section>
  );
};

export default Postcard;
