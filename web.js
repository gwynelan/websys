// web.js - Move slideshow logic into a React component

import React, { useState, useEffect } from 'react';

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="slider">
      <div className="slider-content">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ display: index === currentImageIndex ? 'block' : 'none' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
