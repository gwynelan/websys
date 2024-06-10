import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuButton from '../javascript/menubutton.js';

import creamyGarlicPastaImage from '../img/Creamy-garlic-pasta.jpeg';
import cheeseburgerPastaImage from '../img/Cheeseburger-Pasta-.jpeg';
import mackerelBeetrootImage from '../img/chargrilled-mackerel-with-sweet-sour-beetroot.jpeg';
import pastabg from '../img/pastabg.jpg'; 
import slider1Image from '../img/slider1.jpg';
import slider2Image from '../img/slider2.jpg';
import Slideshow from '../javascript/web.js';
import logo from '../img/logo.png'

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      {/* Header */}
      <header class="header">
      <link rel="web.css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-xrQtNXWQR8UVRdMQ/LHpG1KtuwpEj+Z+JRs8MVS6l3p1n9vi2WCC7sWx6BR4OBepmh7RVV2Z7px3GSRzHSF6jA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

        <div class="header-left">
          <div class="home-page-title">
            <img src={logo} alt="Logo" class="home-page-logo" />
            Savor Delight
          </div>
        </div>
        <div class="header-right">
          <MenuButton showMenu={showMenu} setShowMenu={setShowMenu} />
          <nav className={`home-page-main-menu ${showMenu ? 'show-menu' : ''}`}>
            <ul>
              <li><Link to="/elan-lumay/about">About</Link></li>
              <li><Link to="/elan-lumay/menu">Menu</Link></li>
              <li><Link to="/elan-lumay/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Welcome Section */}
      <div className="home-page-welcome-section">
          <h2>Welcome to Savor Delight</h2>
          <p>Experience the finest dining in town</p>
          <Link to="/menu" className="home-page-button">View Menu</Link>
      </div>

      {/* About Section */}
      <div id="home-page-about-section">
        <div className="home-page-container">
          <h2>About Us</h2>
          <p>we take pride in crafting a menu that celebrates the art of pasta-making. From traditional favorites to inventive creations, our dishes
             promise to tantalize your taste buds and transport you to the sun-kissed streets of Italy with each savory bite.
             At Savor Delight, pasta isn't just a dish—it's a celebration of culinary craftsmanship and the joy of shared dining experiences.
             Whether you're a pasta aficionado or simply seeking a taste of something extraordinary, let Savor Delight be your guide to a world of culinary delights.</p>
          <Slideshow images={[pastabg, slider1Image, slider2Image]} />
        </div>
      </div>

      {/* Recipe Section */}
      <div className="home-page-recipe-section" id="menu">
        <h2>Popular Picks</h2>
        <div className="home-page-box">
          <div className="home-page-card">
            <h3>Creamy Garlic Pasta</h3>
            <p>This creamy tagliatelle recipe makes a comforting midweek meal. Any long pasta will work, so use whatever you have in the cupboard.</p>
            <img src={creamyGarlicPastaImage} alt="Creamy Garlic Pasta" />
            <div className="home-page-card-content">
              <Link to="/recipe" className="home-page-recipe-button">View Recipe</Link>
            </div>
          </div>

          <div className="home-page-card">
            <h3>One-Pot Cheeseburger Pasta</h3>
            <p>Combine the best of two comfort foods in one dish – perfect for a Friday night treat. Top with pickles and jalapeños to serve.</p>
            <img src={cheeseburgerPastaImage} alt="One-Pot Cheeseburger Pasta" />
            <div className="home-page-card-content">
              <Link to="/recipe" className="home-page-recipe-button">View Recipe</Link>
            </div>
          </div>

          <div className="home-page-card">
            <h3>Chargrilled Mackerel with Sweet Sour Beetroot</h3>
            <p>Delicious smoked, baked, or grilled on the barbecue.</p>
            <img src={mackerelBeetrootImage} alt="Chargrilled Mackerel with Sweet Sour Beetroot" />
            <div className="home-page-card-content">
              <Link to="/recipe" className="home-page-recipe-button">View Recipe</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <footer>
      <div class="home-page-contact-info">
      <div class="socialmediarow">
      <ul>
        <li><a href="https://www.facebook.com/savordelight" target="_blank" rel="noreferrer"><i class="fab fa-facebook facebook-icon"></i> Facebook</a></li>
        <li><a href="https://twitter.com/savordelight" target="_blank" rel="noreferrer"><i class="fab fa-twitter twitter-icon"></i> Twitter</a></li>
        <li><a href="https://www.instagram.com/savordelight/" target="_blank" rel="noreferrer"><i class="fab fa-instagram instagram-icon"></i> Instagram</a></li>
      </ul>
      </div>
      <div class="contactrow">
        <p><strong>Phone:</strong> +63 936-311-1790</p>
        <p><strong>Email:</strong> <a href="mailto:info@savordelight.com">savordelight@gmail.com</a></p>   
      </div>
      <div class="row">
        <p><strong>Indulge in the flavors of joy, where every dish is a celebration of taste and every moment a savory delight ヅ</strong></p>
      </div>
      </div>

      </footer>
    </div>
  );
};

export default HomePage;
