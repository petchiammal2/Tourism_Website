import React from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import './CSS/Contact.css';
import transportation from '../Assets/transportation.webp';
import phone from '../Assets/phone.webp';
import email from '../Assets/email.webp';
import location from '../Assets/location.webp';

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.init('mWdWnSzZphtckG2Bm'); // Initialize with the public key

    emailjs
      .sendForm('service_pr3ctbc', 'template_2lh0cqs', form.current)
      .then(
        () => {
          window.alert("Your message has been sent successfully!");
          console.log('SUCCESS!');
        },
        (error) => {
          window.alert("Failed to send your message. Please try again.");
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact-page">
      {/* Full Cover Image with Heading */}
      <div className="cover-image">
        <img src={transportation} alt="hero image" />
        <h1>Contact</h1>
        <p>Reach out to us for any tourism-related queries or assistance.</p>
      </div>

      {/* Contact Container */}
      <div className="contact-container">
        {/* Left Section */}
        <div className="contact-left">
          <h2>Drop Us a Message for Any Query</h2>
          <h3>Contact Information</h3>
          <div className="contact-info">
            <div className="info-item">
              <img src={location} alt="Location" />
              <p>123 Tourism Avenue, Wanderlust City, WL 56789</p>
            </div>
            <div className="info-item">
              <img src={phone} alt="Phone" />
              <p>+1 234 567 890</p>
            </div>
            <div className="info-item">
              <img src={email} alt="Email" />
              <p>contact@tourism.com</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Your Name" name="user_name" required />
            <input type="text" placeholder="Your Phone" name="user_phone" required />
            <input type="email" placeholder="Your Email" name="user_email" required />
            <input type="text" placeholder="Subject" name="user_subject" />
            <textarea placeholder="Your Message" name="user_message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <div className="map-details">
          <p>Our Location: 123 Tourism Avenue, Wanderlust City, WL 56789</p>
        </div>
        <iframe
          title="Map Direction"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094373!2d144.95373631561677!3d-37.81627974202144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sVictoria!5e0!3m2!1sen!2sau!4v1632889457366!5m2!1sen!2sau"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
