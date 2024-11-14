import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import tour from './Assets/tour.png';
import hotel from './Assets/hotel.png';
import transport from './Assets/transport.png';

const services = [
  {
    id: 1,
    title: "Guided Tours",
    description: "Explore the best attractions with our experienced guides.", // uncommented
    icon: "fa-solid fa-person-walking"
  },
  {
    id: 2,
    title: "Hotel Bookings",
    description: "We offer the best hotels and resorts for a comfortable stay.", // uncommented
    icon: "fa-solid fa-bed"
  },
  {
    id: 3,
    title: "Transportation",
    description: "Private and shared transport options to move around easily.", // uncommented
    icon: "fa-solid fa-car"
  },
];

const Service = () => {
  return (
    <div className="service-container">
      <h2 className="page-title">Our Services</h2>
      <div className="service-img">
        <img src={tour} alt="Tour image" />
        <img src={hotel} alt="Hotel image" />
        <img src={transport} alt="Transport image" />
      </div>
      <div className="service-list">
        {services.map((service) => (
          <Link to={`/service/${service.id}`} key={service.id} className="service-item-link">
            <div className="service-item">
              <i className={`${service.icon} service-icon`}></i>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p> {/* Now this will work */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Service;