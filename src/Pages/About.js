import React, { useState } from 'react';
import './CSS/About.css'; // Combined styles for About and Reservation

// Import images from the Assets folder
import About1 from '../Assets/about1.jpg';
import About2 from '../Assets/about2.jpg';
import About3 from '../Assets/about3.jpg';
import About4 from '../Assets/about4.jpg';
import About5 from '../Assets/about5.jpg';

const About = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleAvailability = () => {
    alert(`Checking availability for:
    Check-in: ${checkInDate}
    Check-out: ${checkOutDate}
    Rooms: ${rooms}
    Adults: ${adults}
    Children: ${children}`);
  };

  return (
    <div className="about-page">
      {/* About Section */}
      <h1 className="about-heading">About Us</h1>
      <div className="big-container">
        <img src={About2} alt="Tourism View" className="big-image" />
        <p className="about-description">
          Welcome to our tourism website! Discover the beauty and culture of
          amazing places around the world. Our mission is to bring the best
          travel experiences to your fingertips.
        </p>
      </div>
      <div className="two-images">
        <img src={About2} alt="Tourism Spot 1" className="side-image" />
        <img src={About1} alt="Tourism Spot 2" className="side-image" />
      </div>
      <div className="three-images">
        <div className="image-text">
          <img src={About3} alt="Experience 1" className="small-image" />
          <p>Experience Nature</p>
        </div>
        <div className="image-text">
          <img src={About4} alt="Experience 2" className="small-image" />
          <p>Explore Culture</p>
        </div>
        <div className="image-text">
          <img src={About5} alt="Experience 3" className="small-image" />
          <p>Discover Adventures</p>
        </div>
      </div>

      {/* Reservation Section */}
      <div className="reservation-section">
        <h2 className="reservation-heading">Make a Reservation</h2>
        <div className="reservation-form">
          <div className="form-group">
            <label htmlFor="check-in">Check-In</label>
            <input
              type="date"
              id="check-in"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="check-out">Check-Out</label>
            <input
              type="date"
              id="check-out"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rooms">Rooms</label>
            <select
              id="rooms"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
            >
              {[...Array(5)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1} Room(s)
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="adults">Adults</label>
            <select
              id="adults"
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
            >
              {[...Array(5)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1} Adult(s)
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="children">Children</label>
            <select
              id="children"
              value={children}
              onChange={(e) => setChildren(e.target.value)}
            >
              {[...Array(6)].map((_, i) => (
                <option key={i} value={i}>
                  {i} Child(ren)
                </option>
              ))}
            </select>
          </div>
          <button
            className="check-availability-btn"
            onClick={handleAvailability}
          >
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
