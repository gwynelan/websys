import React from 'react';

const AboutMenuButton = ({ showMenu, setShowMenu }) => {
  const toggleMenu = () => {
    setShowMenu(!showMenu); // Toggle the showMenu state
  };

  return (
    <button className="about-menu-toggle" onClick={toggleMenu}>
      &#9776;
    </button>
  );
};

export default AboutMenuButton;
