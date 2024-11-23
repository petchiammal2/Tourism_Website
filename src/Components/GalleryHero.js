import React from "react";
import './CSS/GalleryHero.css';
import Image1 from '../Assets/pic_1.webp';  // Corrected path

const GalleryHero = () => {
  return (
    <div className="gallery-hero">
      <img src={Image1} alt="Bible background" className="gallery-img"/>
      <div className="gallery-text">
        <h1>Gallery</h1>
        <p>
          Explore moments of joy, worship, and community in our photo gallery.
          These images capture the spirit of our church family and the various
          events and activities we've shared.
        </p>
      </div>
    </div>
  );
};

export default GalleryHero;
