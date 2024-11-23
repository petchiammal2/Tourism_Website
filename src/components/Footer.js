import React from 'react';
import './CSS/GallerySection2.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>Furni.com</h2>
        <p>Copyright © 2021 Furni<br />All rights reserved</p>
        <div className="social-icons">
          <a href="#" aria-label="Instagram">🌐</a>
          <a href="#" aria-label="Twitter">🐦</a>
          <a href="#" aria-label="YouTube">🎥</a>
        </div>
      </div>
      <div className="footer-section">
        <h3>Company</h3>
        <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">About us</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Legal</h3>
        <ul>
          <li><a href="#">Legal policy</a></li>
          <li><a href="#">Status policy</a></li>
          <li><a href="#">Privacy policy</a></li>
          <li><a href="#">Terms of service</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Get updates</h3>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">👍</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
