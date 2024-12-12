import React from 'react';
import './CSS/HomeSection1.css';

// Import the images from the Assets folder
import Image1 from '../Assets/change2.avif';
import Image2 from '../Assets/chang4.avif';

// Import Link from react-router-dom for navigation
import { Link } from 'react-router-dom';

function HomeSection1() {
    return (
        <section className="home-section">
            <div className="home-content">
                <div className="home-image-outer-container">
                    <div className="home-image">
                        {/* Use the imported images here */}
                        <img src={Image1} alt="Explore the world" />
                    </div>
                    <div className="home-image">
                        <img src={Image2} alt="Explore the world" />
                    </div>
                </div>
                <div className="home-text">
                    <h1>See the World, Feel the Magic</h1>
                    <p>Experience the beauty and diversity of amazing locations.</p>
                    {/* Wrap the button in a Link component to navigate to the /book page */}
                    <Link to="/book">
                        <button>Start Your Journey</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default HomeSection1;
