import React from 'react';
import './CSS/Explorehero.css'; // Make sure to style the component
import heroImage from "../Assets/hero.jpg"; // Replace with your image path

const Explorehero = () => {
  return (
    <div className="Explore-container">
      <img src={heroImage} alt="Explore Nature" className="Explore-image" />
      <div className="Explore-content">
        <h1>Explore the World</h1>
        <p>Discover beautiful places, cultures, and adventures.</p>
        <button className="Explore-button">Explore Now</button>
      </div>
    </div>
  );
};

export default Explorehero;
