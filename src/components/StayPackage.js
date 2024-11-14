import React from 'react';
import './StayPackage.css';

// Import images from the assets folder
import img1 from './Assets/img1.jpg';
import img2 from './Assets/img2.jpg';
import img3 from './Assets/img3.jpg';
import img4 from './Assets/img4.jpg';
import img5 from './Assets/img5.jpg';
import wicon from './Assets/wicon.png';
import cicon from './Assets/cicon.png';
// Package data with imported images
const packages = [
  {
    id: 1,
    title: 'Camp Tent',
    description: 'Enjoy the great outdoors in our cozy camping tents. Perfect for nature lovers looking for a simple and fun camping experience.',
    price: '₹1000/ Per Person',
    img: img1,
  },
  {
    id: 2,
    title: 'Camp Tent',

    description: 'Upgrade your camping experience with our Commando Tents. Enjoy more comfort and privacy while staying close to nature.',
    price: '₹1500/ Per Person',
    img: img2,
  },
  {
    id: 3,
    title: 'Room without AC',
    description: 'Relax in our comfortable rooms, perfect for families and couples. Enjoy a peaceful stay with all the essentials you need.',
    price: '₹2500/ Per Person',
    img: img3,
  },
  {
    id: 4,
    title: 'AC Room',
    description: 'Stay cool in our air-conditioned rooms. Perfect for those who want extra comfort and a relaxing stay.',
    price: '₹3500/ Per Person',
    img: img4,
  },
  {
    id: 5,
    title: 'House with Pool',
    description: 'Stay in our poolside tents for easy access to the swimming pool. Enjoy a refreshing and fun stay right by the water.',
    price: '₹5000/ Per Person',
    img: img5,
  },
];

const StayPackage = () => {
  return (
    <div className="stay-package-container">
      <h2 className="page-title">Our Package<span>Details</span> </h2>
      
      {/* Package Grid */}
      <div className="package-grid">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <img src={pkg.img} alt={pkg.title} className="package-image" />
            <h3 className="package-title">{pkg.title}</h3>
            <p className="package-price">{pkg.price}</p>
            <p className="package-description">{pkg.description}</p>
          </div>
        ))}
      </div>

      {/* Check Package Button */}
      <div className="common-button-container">
        <a href="/packageDetail" className="check-all-packages-btn">
          Check Packages
        </a>
      </div>

      {/* Floating Buttons */}
      <div className="floating-buttons">
        <a href="https://wa.me/1234567890" target="_blank" className="whatsapp-button">
          <img src={wicon} alt="WhatsApp Image" />
        </a>
        <a href="tel:+1234567890" className="call-button">
        <img src={cicon} alt="Call Image" />
          
        </a>
      </div>
    </div>
  );
};

export default StayPackage;
