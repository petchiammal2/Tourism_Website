import React from 'react';
import './CSS/Features.css';
import packageImg from '../Assets/package.jpg';
import experienceImg from '../Assets/experiences.jpg';
import serviceImg from '../Assets/service.jpg';

function Features() {
  return (
    <section className="features">
      <h1>Why We Are Different</h1>
      <div className="feature-container">
        <div className="feature-item">
          <img src={packageImg} alt="Tailor-Made Packages" />
          <h3> Tailor-Made Packages</h3>

          <p> when it comes to delivering the best planned holiday package to you,we stive exceed your expectation.For us,it has to be spot-on We do what we do in the ideal way possible.</p>
        
        </div>
        <div className="feature-item">
          <img src={experienceImg} alt="Best Experience" />
          <h3>Best Experience </h3>
          <p> At purplearin hoildays,we choose to put forth an essences of our own expertuise and firsthnd experiences into our services and method of planning.</p>
        </div>
        <div className="feature-item">
          <img src={serviceImg} alt="Exquisite Service" />
          <h3> Exquisite Service</h3>
          <p>From the moment you make the first cail to enquire,our services are geared up.From the time booking.to your stay and well after the trip  as well, we will guide you and be at your back.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
