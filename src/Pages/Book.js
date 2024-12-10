import React, { useState } from 'react';
import './CSS/Book.css'; // Ensure the CSS file is imported correctly
import image1 from '../Assets/about2.jpg'; // Corrected the import path

const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    startDate: '',
    endDate: '',
    adults: 1,
    children: 0,
  });

  const [successMessage, setSuccessMessage] = useState('');

  // Dynamic background image URL
  const backgroundImage = `url(${image1})`; // Using the imported image here

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show success message on successful booking
    setSuccessMessage('Booking Successful! We will contact you soon.');
    // Clear form after submission
    setFormData({
      name: '',
      mobile: '',
      startDate: '',
      endDate: '',
      adults: 1,
      children: 0,
    });
  };

  return (
    <div
      className="book-page-container"
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh', // Ensures the page takes up full height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="book-form-container">
        <div className="book-page-header">
          <h1>Book Your Journey Now!</h1>
          <p>Fill in the details below to reserve your trip.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="input-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              placeholder="Enter your mobile number"
            />
          </div>

          <div className="input-group">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="adults">Adults</label>
            <select
              id="adults"
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              required
            >
              {[...Array(10).keys()].map((i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="children">Children</label>
            <select
              id="children"
              name="children"
              value={formData.children}
              onChange={handleChange}
              required
            >
              {[...Array(10).keys()].map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="book-now-button">
            Book Now
          </button>
        </form>

        {successMessage && (
          <div className="success-message">
            <p>{successMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Book;
