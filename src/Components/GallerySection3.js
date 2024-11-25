import React from 'react';
import './CSS/GallerySection3.css';
import Image1 from '../Assets/pic_4.webp';  // Corrected path
import Image2 from '../Assets/pic_5.webp';  // Corrected path
import Image3 from '../Assets/pic_6.webp';  // Corrected path
import Image4 from '../Assets/pic_7.webp';  // Corrected path

const images = [Image1,Image2,Image3,Image4];

const Gallery2 = () => {
  return (
    <div className="image-containers">
      <h1 className="image-title">Our Tourist Places Photos</h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <div className="image-item" key={index}>
            <img src={image} alt={`Gallery ${index + 1}`} className="gallery-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery2;
