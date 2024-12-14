import React from 'react';
import './CSS/HomeSection1.css';

// Import the images from the Assets folder
import Image1 from '../Assets/change2.avif';
import Image2 from '../Assets/chang4.avif';

function HomeSection1({ scrollToHomeSection4 }) {
  return (
    <>
      <section className="home-section">
        <div className="home-content">
          <div className="home-image-outer-container">
            <div className="home-image">
              <img src={Image1} alt="Explore the world" />
            </div>
            <div className="home-image">
              <img src={Image2} alt="Explore the world" />
            </div>
          </div>
          <div className="home-text">
            <h1>See the World, Feel the Magic</h1>
            <p>Experience the beauty and diversity of amazing locations.</p>
            {/* Button to trigger scrolling to HomeSection4 */}
            <button onClick={scrollToHomeSection4}>Start Your Journey</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeSection1;
