'use client'
import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Import your CSS file for styling

const slidesData = [
  {
    title: 'Food',
    description: 'Lorem ipsum dolor sit amet consectet.',
  },
  {
    title: 'Meat Masala',
    description: 'Lorem ipsum dolor sit amet consectet.',
  },
  {
    title: 'Vegetarian',
    description: 'Lorem ipsum dolor sit amet consectet.',
  },
  {
    title: 'Thai Soup',
    description: 'Lorem ipsum dolor sit amet consectet.',
  },
  {
    title: 'Sea Food',
    description: 'Lorem ipsum dolor sit amet consectet.',
  },
];

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="slideshow-container">
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          <h2>{slide.title}</h2>
          <p>{slide.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Slideshow;
