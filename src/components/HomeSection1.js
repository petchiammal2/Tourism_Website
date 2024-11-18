import React from 'react';
import './CSS/HomeSection1.css';

// Import the images from the Assets folder
import Image1 from '../Assets/images-2.jpeg';
import Image2 from '../Assets/images-3.jpeg';

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
                    <h1>See the World, Feel the Magic
                    </h1>
                    <p>Experience the beauty and diversity of amazing locations.</p>
                    <button>Start Your Journey</button>
                </div>
            </div>
        </section>
    );
}

export default HomeSection1;
