import React from 'react';
import './CSS/About.css'; // Import CSS for styling

// Import images from the Assets folder
import About6 from '../Assets/about0.webp';
import About3 from '../Assets/about3.jpg';
import About4 from '../Assets/about4.jpg';
import About5 from '../Assets/about5.jpg';

// Manager and Worker Images
import MAN2 from '../Assets/man2.jpg';
import MAN3 from '../Assets/man3.jpg';

// Reusable Team Member Component
const TeamMember = ({ imgSrc, name, role, email, phone }) => (
  <div className="team-member">
    <img src={imgSrc} alt={`${role}`} className="team-image" />
    <h3>{name}</h3>
    <p>{role}</p>
    <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
    <p>Phone: <a href={`tel:${phone}`}>{phone}</a></p>
  </div>
);

const About = () => {
  return (
    <div className="about-page">
      {/* About Section */}
      <div className="big-container">
        <div className="image-container">
          <img src={About6} alt="Tourism View" className="big-image" />
          <div className="image-overlay" aria-label="Overlay text">
            <h2>About Us</h2>
          </div>
        </div>
      </div>

      <section className="overlay-description">
        <h2>Discover the World Through Travel</h2>
        <p>
          Welcome to our tourism website, your gateway to exploring breathtaking destinations around the globe. From serene beaches and lush mountains to historic landmarks and vibrant cities, our platform brings you closer to the wonders of the world. Let your wanderlust lead the way!
        </p>
      </section>

      {/* Three Images Section */}
      <section className="three-images">
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
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2 className="team-heading">Meet Our Team</h2>
        <div className="team-container">
          <TeamMember
            imgSrc={MAN2}
            name="Jane Smith"
            role="Manager"
            email="jane.smith@example.com"
            phone="+1234567891"
          />
          <TeamMember
            imgSrc={MAN3}
            name="Emily Davis"
            role="Guide"
            email="emily.davis@example.com"
            phone="+1234567892"
          />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="subscript">
        <hr />
        <p>Copyright ©2023 Mr. Vinoth Kumar. All Rights Reserved.</p>
        <p>Follow Me</p>
      </footer>
    </div>
  );
};

export default About;
