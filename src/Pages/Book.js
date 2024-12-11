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

  const [successMessage, setSuccessMessage] = useState(false); // Change to a boolean for showing/hiding the modal

  // Dynamically set background image from imported file
  const backgroundImage = `url(${image1})`; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show success modal on successful booking
    setSuccessMessage(true);
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

  const closeModal = () => {
    setSuccessMessage(false); // Close the modal
  };

  return (
    <div
      className="book-page-container"
      style={{
        backgroundImage: backgroundImage, // Dynamically setting background
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
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
            <label htmlFor="startDate">Start your Journey Date</label>
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
            <label htmlFor="endDate">End your Journey Date</label>
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
      </div>

      {/* Success Modal */}
      {successMessage && (
        <div className="success-modal">
          <div className="modal-content">
            <h2>Booking Successful!</h2>
            <p>We will contact you soon to confirm your booking.</p>
            <button onClick={closeModal} className="close-modal-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Book;
