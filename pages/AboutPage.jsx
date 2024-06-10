import React from 'react';
import logo from '../img/logo.png'; // Import your logo image
import chefImage from '../img/chef.avif'; // Import your chef image
import cherryImage from '../img/cherry.jpg'; // Import cherry image
import puttanescaImage from '../img/puttanesca.jpeg'; // Import puttanesca image
import creamyPastaImage from '../img/creamypasta.jpg'; // Import creamy pasta image
import '../css/about.css'; // Import CSS file

const AboutPage = () => {
  return (
    <div>
      {/* Header */}
      <header className="aboutpage-header">
        <div className="aboutnav-logo">
          <a href="/">
            <img src={logo} alt="Simply Recipes" />
          </a>
        </div>
        <div className="aboutpage-nav-links">
          <a href="/elan-lumay" className="aboutpage-nav-link">Home</a>
          <a href="/elan-lumay/menu" className="aboutpage-nav-link">Menu</a>
          <a href="/elan-lumay/contact" className="aboutpage-nav-link">Contact</a>
        </div>
      </header>

      {/* About section */}
      <section className="aboutpage-about">
        <article className="aboutpage-about-content">
          <div className="aboutpage-about-text">
            <h2>Indulge in a tantalizing array of unique pasta recipes that will ignite your taste buds and inspire your inner chef!</h2>
            <p>
              Welcome to our pasta paradise! Dive into a culinary adventure with our website, where you'll discover a treasure trove of unique 
              pasta recipes. From classic favorites to innovative creations, we've got something to tantalize every taste bud. 
            </p>
            <p>Join us and embark on a delicious journey through the world of pasta!</p>
          </div>
          <img
            src={chefImage}
            alt="Person Pouring Salt in Bowl"
            className="aboutpage-about-img"
          />
        </article>
      </section>

      {/* Featured recipes section */}
      <section className="aboutpage-featured-recipes">
        <h5 className="aboutpage-featured-title">Look At This Awesome Pasta!</h5>
        <div className="aboutpage-recipes-list">
          {/* Single Recipe */}
          <a href="/menu" className="aboutpage-recipe">
            <img
              src={cherryImage}
              className="aboutpage-recipe-img"
              alt="Cherry Tomato Pasta Salad"
            />
            <h5>Cherry Tomato Pasta Salad</h5>
            <p>Prep: 15min | Cook: 5min</p>
          </a>
          {/* End of Single Recipe */}
          
          {/* Single Recipe */}
          <a href="menu.html" className="aboutpage-recipe">
            <img
              src={puttanescaImage}
              className="aboutpage-recipe-img"
              alt="Puttanesca with Angel Hair Pasta"
            />
            <h5>Puttanesca with Angel Hair Pasta</h5>
            <p>Prep: 15min | Cook: 5min</p>
          </a>
          {/* End of Single Recipe */}
          
          {/* Single Recipe */}
          <a href="menu.html" className="aboutpage-recipe">
            <img
              src={creamyPastaImage}
              className="aboutpage-recipe-img"
              alt="Creamy Pasta with Spinach"
            />
            <h5>Creamy Pasta with Spinach</h5>
            <p>Prep: 15min | Cook: 5min</p>
          </a>
          {/* End of Single Recipe */}
        </div>
      </section>

      {/* Footer */}
      <footer className="aboutpage-footer">
        <p>
          &copy; <span id="date"></span>
          <span className="aboutpage-footer-logo">SimplyRecipes</span> Built by
          <a href="https://www.savordelight.com/"> Culinary Enthusiast</a>
        </p>
      </footer>
    </div>
  );
}

export default AboutPage;
