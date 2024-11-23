import React from 'react';
import './CSS/GallerySection1.css';
import pic1 from '../Assets/pic_2.webp';  // Corrected path
import pic2 from '../Assets/pic_3.webp';  // Corrected path

const Gallery1 = () => {
  return (
    <div className="gallery-container">
      <img src={pic1} alt="Group 1" className="gallery-image" />
      <img src={pic2} alt="Group 2" className="gallery-image" />
    </div>
  );
};

export default Gallery1;
