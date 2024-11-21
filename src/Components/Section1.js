import React from 'react';
import './CSS/HeroSection.css';
import Image1 from '../Assets/images-1.jpeg';  // Corrected path

function Section1() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Explore the World with Us</h1>
                    <p>Discover amazing places and unique experiences.</p>
                    <button>Start Your Journey</button>
                </div>
                <div className="hero-image">
                    <img src={Image1} alt="Explore the world" />
                </div>
            </div>
        </section>
    );
}

export default Section1;
