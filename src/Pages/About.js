import React from 'react';
import './CSS/About.css'; // Import CSS for styling

// Import images from the Assets folder
import About6 from '../Assets/about.avif';
import About3 from '../Assets/about3.jpg';
import About4 from '../Assets/about4.jpg';
import About5 from '../Assets/about5.jpg';

// Manager and Worker Images
import MAN2 from '../Assets/man2.jpg';
import MAN3 from '../Assets/man3.jpg';
import MAN1 from '../Assets/man1.jpg';

const About = () => {
  return (
    <div className="about-page">
      {/* About Section */}
      <div className="big-container">
        <div className="image-container">
          <img src={About6} alt="Tourism View" className="big-image" />
          <div className="image-overlay">
            <h2>About Us</h2>
          </div>
        </div>
      </div>

      <div className="overlay-description2">
        <h2>Discover the World Through Travel</h2>
        <p>
        Welcome to our tourism website, your gateway to exploring breathtaking destinations around the globe. From serene beaches and lush mountains to historic landmarks and vibrant cities, our platform brings you closer to the wonders of the world. Let your wanderlust lead the way!
        </p>
      </div>

      {/* Three Images Section */}
      <div className="three-images">
        <div className="image-text">
          <img src={About3} alt="Experience Nature" className="small-image" />
          <h3>Experience Nature</h3>
          <p>
            Nature offers a serene escape, where every element soothes and inspires, fostering a sense of peace and energy.
          </p>
        </div>
        <div className="image-text">
          <img src={About4} alt="Explore Culture" className="small-image" />
          <h3>Explore Culture</h3>
          <p>
            Dive into vibrant cultures, from colorful festivals to local art and food, each experience a tale of tradition.
          </p>
        </div>
        <div className="image-text">
          <img src={About5} alt="Discover Adventures" className="small-image" />
          <h3>Discover Adventures</h3>
          <p>
            Seek hidden adventures, from green fields to rivers and hills, each moment filled with stories and surprises.
          </p>
        </div>
      </div>

      {/* Company Description */}
      <div className="company-description">
        <h2>About Our Company</h2>
        <p>
          We are passionate about offering unforgettable travel experiences. Our team works tirelessly to bring you the best tours and packages, ensuring your journey is not just a vacation but an adventure of a lifetime. Whether you're looking to relax on a beach, explore a new city, or immerse yourself in nature, we've got you covered. Join us as we take you to some of the most amazing destinations around the world!
        </p>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h2 className="team-heading">Meet Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src={MAN2} alt="Receptionist" className="team-image" />
            <h3>Jane Smith</h3>
            <p>Manager</p>
            <p>Email: jane.smith@example.com</p>
            <p>Phone: +123 456 7891</p>
          </div>
          <div className="team-member">
            <img src={MAN3} alt="Guide" className="team-image" />
            <h3>Emily Davis</h3>
            <p>Guide</p>
            <p>Email: emily.davis@example.com</p>
            <p>Phone: +123 456 7892</p>
          </div>
          <div className="team-member">
            <img src={MAN1} alt="Guide" className="team-image" />
            <h3>Michael Brown</h3>
            <p>Guide</p>
            <p>Email: michael.brown@example.com</p>
            <p>Phone: +123 456 7893</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      
    </div>
  );
};

export default About;
