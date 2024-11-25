
import React, { useState, useRef, useEffect } from 'react';
import './CSS/Section1.css';
import image1 from '../Assets/pic2.jpg';  // Adjust the path as needed
import image2 from '../Assets/sec1.webp';
import image3 from '../Assets/sec2.webp';

function Section1() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const images = [image1, image2, image3];

  // Handle scroll to update active index
  const handleScroll = () => {
    const scrollLeft = scrollContainerRef.current.scrollLeft;
    const sectionWidth = scrollContainerRef.current.offsetWidth;
    const newIndex = Math.floor(scrollLeft / sectionWidth);
    setActiveIndex(newIndex);
  };

  // Scroll to a specific section when a dot is clicked
  const handleDotClick = (index) => {
    const sectionWidth = scrollContainerRef.current.offsetWidth;
    scrollContainerRef.current.scrollTo({
      left: sectionWidth * index,
      behavior: 'smooth',
    });
  };

  // Set up interval to automatically switch between images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length; // Loop back to first after last
        scrollContainerRef.current.scrollTo({
          left: nextIndex * scrollContainerRef.current.offsetWidth,
          behavior: 'smooth',
        });
        return nextIndex;
      });
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    // Add event listener for scroll
    scrollContainerRef.current.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainerRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="scroll-container" ref={scrollContainerRef}>
        {/* Map over images array */}
        {images.map((image, index) => (
          <div className="hero-content" key={index}>
            <div className="hero-text">
              <h1>Explore the World with Us</h1>
              <p>Discover amazing places and unique experiences.</p>
              <button>Start Your Journey</button>
            </div>
            <div className="hero-image">
              <img src={image} alt={`Explore the world ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Dot Navigation */}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );

}

export default Section1;
