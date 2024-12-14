import React, { useState, useRef, useEffect } from 'react';
import './CSS/Section1.css';
import image1 from '../Assets/fur2.webp';
import image2 from '../Assets/fur4.jpg';
import image3 from '../Assets/fur3.webp';

function Section1({ scrollToHomeSection4 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollContainerRef = useRef(null);
  const images = [image1, image2, image3];

  const handleScroll = () => {
    if (isScrolling) return;
    const scrollLeft = scrollContainerRef.current.scrollLeft;
    const sectionWidth = scrollContainerRef.current.offsetWidth;
    const newIndex = Math.floor(scrollLeft / sectionWidth);
    setActiveIndex(newIndex);
  };

  const handleDotClick = (index) => {
    if (scrollContainerRef.current) {
      const sectionWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: sectionWidth * index,
        behavior: 'smooth',
      });
      setIsScrolling(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTo({
            left: nextIndex * scrollContainerRef.current.offsetWidth,
            behavior: 'smooth',
          });
        }
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsScrolling(false);
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      container.addEventListener('transitionend', handleTransitionEnd);

      return () => {
        container.removeEventListener('scroll', handleScroll);
        container.removeEventListener('transitionend', handleTransitionEnd);
      };
    }
  }, [isScrolling]);

  return (
    <section className="hero-section">
      <div className="scroll-container" ref={scrollContainerRef}>
        {images.map((image, index) => (
          <div className="hero-content" key={index}>
            <div className="hero-text">
              <h1>Explore the World with Us</h1>
              <p>Discover amazing places and unique experiences.</p>
              <button className="start-button" onClick={scrollToHomeSection4}>
                Start Your Journey
              </button>
            </div>
            <div className="hero-image">
              <img src={image} alt={`Explore the world ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>

      <div className={`dots ${isScrolling ? 'hide' : ''}`}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Section1;
