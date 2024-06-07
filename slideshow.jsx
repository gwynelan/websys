import React, { useEffect } from 'react';
import { initializeSlideshow } from '../javascript/web.js'; // Adjust the path as needed

const Slideshow = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = './web.js'; // Adjust the path as needed
    script.async = true;

    script.onload = () => {
      console.log('Script loaded successfully.');
      initializeSlideshow();
    };

    script.onerror = () => {
      console.error('Error loading script.');
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="slider-content">
      <img src="image1.jpg" alt="Slide 1" />
      <img src="image2.jpg" alt="Slide 2" />
      <img src="image3.jpg" alt="Slide 3" />
    </div>
  );
};

export default Slideshow;
