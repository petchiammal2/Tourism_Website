import React from 'react';
import './CSS/ExploreSection.css';

// Import the images from the Assets folder
import Myimage1 from '../Assets/Myimage1.jpg';
import Myimage from '../Assets/Myimage.jpg';

function ExploreSection() {
    return (
        <section className="explore-section">
            <div className="explore-content">
                <div className="explore-image-outer-container">
                    <div className="explore-image">
                        {/* Use the imported images here */}
                        <img src={Myimage} alt="Explore " />
                    </div>
                    <div className="explore-image">
                        <img src={Myimage1} alt="Explore " />
                    </div>
                </div>
                <div className="explore-text">
                    <h1>Explore the world</h1>
                    <p>The term explore refers to the act of investigating, examining, or traveling through an area or subject to learn more about it. It often involves curiosity, discovery, and the pursuit of new knowledge or experiences. </p>
                    <button>Explore Now</button>
                </div>
            </div>
        </section>
    );
}

export default ExploreSection;
