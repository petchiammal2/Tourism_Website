import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Furni.com</h3>
        <p>Copyright © 2021 Furni</p>
        <p>All rights reserved</p>
      </div>
      <div className="footer-section">
        <h4>Company</h4>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="blog">Blog</Link></li>
        <li><Link to="service">Services</Link></li>
        <li><Link to="gallery">Gallery</Link></li>
        <li><Link to="contact">Contact</Link></li>

        </ul>
      </div>
      <div className="footer-section">
        <h4>Policies</h4>
        <ul>
          <li>Legal policy</li>
          <li>Status policy</li>
          <li>Privacy policy</li>
          <li>Terms of service</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Get updates</h4>
        <input type="email" placeholder="Enter your email" />
        <button>👍</button>
      </div>
    </footer>
  );
};

export default Footer;
