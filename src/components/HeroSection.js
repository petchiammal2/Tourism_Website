HeroSection.js


import React from 'react';
import './HeroSection.css';

function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Explore the World with Us</h1>
                    <p>Discover amazing places and unique experiences.</p>
                    <button>Start Your Journey</button>
                </div>
                <div className="hero-image">
                    <img src="/images-1.jpeg" alt="Explore the world" />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
