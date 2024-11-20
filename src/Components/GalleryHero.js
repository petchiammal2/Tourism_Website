import React from "react";
import './CSS/GalleryHero.css';
import Image1 from '../Assets/gallery-7.jpg';  // Corrected path



const GalleryHero = () => {
  return (
    <div className="gallery-hero">
      <img src={Image1} alt="Bible background" className="gallery-image"/>
      <div className="gallery-text">
        <h1>Gallery</h1>
        <p>
          Explore the moments of joy , entertainment in our photo gallery.
          These images capture the spirit of our various tourism places in the TamilNadu.
        </p>
      </div>
    </div>
  );
};

export default GalleryHero;
