import React from 'react';
import './CSS/Section1.css';
import image from '../Assets/pic2.jpg';  // adjust path based on where HeroSection.js is located

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
                    <img src={image} alt="Explore the world" />
                </div>
            </div>
        </section>
    );
}

export default Section1;
