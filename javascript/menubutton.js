import React from 'react';

const MenuButton = ({ showMenu, setShowMenu }) => {
  const toggleMenu = () => {
    setShowMenu(!showMenu); // Toggle the showMenu state
  };

  return (
    <button className="menu-toggle" onClick={toggleMenu}>
      &#9776;
    </button>
  );
};

export default MenuButton;
