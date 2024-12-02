import React from 'react';
import './CSS/Service.css';
import tour from '../Assets/tour.webp';
import hotel from '../Assets/hotel.webp';
import transport from '../Assets/transport.webp';
// import servicebg1 from '../Assets/servicebg1.webp';
import servicebg2 from '../Assets/servicebg2.webp';
import swim from '../Assets/swim.webp';
import cultural from '../Assets/cultural.webp';
import itineraries from '../Assets/itineraries.webp';
import { handleWhatsAppMessage } from '../Components/WCintegration';

const ServicePage = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={servicebg2} alt="Hero" className="hero-image"/>
        <h2 className="page-title">Our Services</h2>
        <button className="hero-button" onClick={() => handleWhatsAppMessage("bookNow")}>
          Book Now
        </button>
      </div>

      {/* Service Grid */}
      <div className="service-grid">
        <div className="service-card">
          <div className="service-icon">
            <img src={hotel} alt="ServiceImage" />
          </div>
          <h3 className="service-name">Stay Packages</h3>
          <p className="service-description">Exclusive stay packages tailored for your comfort and budget.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
          <img src={tour} alt="ServiceImage" />
          </div>
          <h3 className="service-name">City Tours</h3>
          <p className="service-description">Guided tours to explore the iconic attractions of the city.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <img src={swim} alt="ServiceImage" />
          </div>
          <h3 className="service-name">Adventure Activities</h3>
          <p className="service-description">Thrilling adventures including trekking, rafting, and ziplining.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
          <img src={transport} alt="ServiceImage" />
          </div>
          <h3 className="service-name">Transportation Service</h3>
          <p className="service-description">Reliable car rentals and airport transfers for hassle-free travel.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
          <img src={cultural} alt="ServiceImage" />
          </div>
          <h3 className="service-name">Cultural Experiences</h3>
          <p className="service-description">Immerse yourself in the local traditions, festivals, and cuisines.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
          <img src={itineraries} alt="ServiceImage" />
          </div>
          <h3 className="service-name">Customized Itineraries</h3>
          <p className="service-description">Personalized travel plans designed to meet your unique interests.</p>
        </div>
      </div>

      {/* View All Button */}
      <button className="view-all-button">View All</button>
    </div>
  );
};

export default ServicePage;