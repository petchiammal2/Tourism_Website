import React from "react";
import "./CSS/FreeTrial.css";

const FreeTrial = () => {
  // WhatsApp chat URL
  const whatsappURL = "https://wa.me/1234567890?text=Hello!%20I%20need%20help."; // Replace with your phone number and custom message.

  return (
    <div className="container">
      {/* Input and Free Trial Button */}
      <div className="email-form">
        <input
          type="email"
          placeholder="Business e-mail"
          className="email-input"
        />
        <button className="free-trial-btn">Free Trial!</button>
      </div>

      {/* WhatsApp Chat Button */}
      <div className="whatsapp-container">
        <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
          <button className="whatsapp-btn">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              alt="WhatsApp Logo"
              className="whatsapp-icon"
            />
            Click to chat
          </button>
        </a>
      </div>

      {/* Privacy Policy Text */}
      <p className="privacy-text">
        By submitting this form, you are agreeing to{" "}
        <span className="privacy-link">Trillion Privacy Policy</span>.
      </p>
    </div>
  );
};

export default FreeTrial;
