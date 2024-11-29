import React from 'react';
import {Link} from 'react-router-dom';
import './CSS/Service.css';
import tour from '../Assets/tour.webp';
import hotel from '../Assets/hotel.webp';
import transport from '../Assets/transport.webp';
import transportation from '../Assets/transportation.webp';
import { handleWhatsAppMessage } from '../Components/WCintegration';

const Service = () => {
  return (
    <div className="service-container">
      <div className='hero-section'>
      <img src={transportation} alt="hero image"  className='hero-image' />
      <h2 className="page-title">Our Services</h2>
      <button className="hero-button" onClick={() => handleWhatsAppMessage("bookNow")}>Book Now</button>
      </div>
      <div className="service-list">
        <Link to="/StayPackage" className="service-item-link">
          <div className="service-item">
          <img src={hotel} alt="Hotel image" />
            <h3>Stay Package</h3>
            <p>Explore our best accommodations for a relaxing stay.</p>
          </div>
        </Link>
        <Link to="/GuidedTourService" className="service-item-link">
          <div className="service-item">
          <img src={tour} alt="Tour image" />
            <h3>Guided Tour</h3>
            <p>Join our expert-led tours to experience the best attractions.</p>
          </div>
        </Link>
        <Link to="/TransportationService" className="service-item-link">
          <div className="service-item">
          <img src={transport} alt="Transport image" />
            <h3>Transportation</h3>
            <p>Reliable transport options for your journeys.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Service;

