// React Component
import React from "react";
import img1 from '../Assets/img1.webp';
import img2 from '../Assets/img2.webp';
import img3 from '../Assets/img3.webp';
import img4 from '../Assets/img4.webp';
import img5 from '../Assets/img5.webp';
import img6 from '../Assets/img6.webp';
import "./CSS/HomeSection5.css";

const TourismHomePage = () => {
  return (
    <div className="Homepage5">
      <h1 className="Home5-header">Explore Our Destinations</h1>
      <div className="Home5-image">
        <div className="Home5-card">
          <img src={img1} alt="Paris" className="Home5-destination"/>
          <p className="destination-name">Paris</p>
        </div>
        <div className="Home5-card">
          <img src={img2} alt="New York" className="Home5-destination" />
          <p className="destination-name">New York</p>
        </div>
        <div className="Home5-card">
          <img src={img3} alt="Tokyo" className="Home5-destination" />
          <p className="destination-name">Tokyo</p>
        </div>
        <div className="Home5-card">
          <img
            src={img4} alt="Sydney" className="Home5-destination" />
          <p className="destination-name">Sydney</p>
        </div>
        <div className="Home5-card">
          <img
            src={img5} alt="London" className="Home5-destination" />
          <p className="destination-name">London</p>
        </div>
        <div className="Home5-card">
          <img
            src={img6} alt="Dubai" className="Home5-destination" />
          <p className="destination-name">Dubai</p>
        </div>
        <div className="Home5-card">
          <img
            src={img5} alt="Rome" className="Home5-destination" />
          <p className="destination-name">Rome</p>
        </div>
        <div className="Home5-card">
          <img
            src={img6} alt="Cape Town" className="Home5-destination" />
          <p className="destination-name">Cape Town</p>
        </div>
      </div>
    </div>
  );
};

export default TourismHomePage;
