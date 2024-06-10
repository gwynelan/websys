import React from 'react';
import '../css/contact.css';
import cherryImage from '../img/cherry.jpg';
import puttanescaImage from '../img/puttanesca.jpeg';
import creamyPastaImage from '../img/creamypasta.jpg';
import logo from '../img/logo.png';

const ContactPage = () => {
  return (
    <div className="contactpage">
      <header className="contactpage-header">
        <div className="contactnav-logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="contactpage-nav-links">
          <a href="/elan-lumay" className="nav-link">Home</a>
          <a href="/elan-lumay/about" className="nav-link">About</a>
          <a href="/elan-lumay/contact" className="nav-link">Contact</a>
        </nav>
      </header>
      
      <section className="contactpage-content">
        <div className="contactpage-info">
          <h2>Culinary Inspiration at Your Fingertips ヅ</h2>
          <p>Immerse yourself in a world of culinary delights! From timeless classics to innovative creations, 
            our contact page is your ultimate destination for all things culinary. Get in touch with your inner chef
            and let your taste buds embark on a tantalizing journey!</p>
          <p>
            Savor every bite of our delectable offerings, from mouthwatering pasta dishes to indulgent desserts.
            Let your imagination run wild as you explore our diverse range of recipes and culinary inspiration!
          </p>
          <p>
          Whether you're a seasoned chef or a novice cook, our contact page has something for everyone. Join us on a culinary
           adventure and let your creativity flourish!
          </p>

          
        </div>
        
        <form className="contactpage-form contact-form">
          <div className="form-row">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" name="name" id="name" className="form-input" />
          </div>
          <div className="form-row">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input type="text" name="email" id="email" className="form-input" />
          </div>
          <div className="form-row">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea name="message" id="message" className="form-textarea"></textarea>
          </div>
          <button type="submit" className="btn btn-block">Submit</button>
        </form>
      </section>
      
      <section className="contactpage-featured-recipes">
        <h5 className="contactfeatured-title">Indulge in These Culinary Delights!</h5>
        <div className="contactrecipes-list">
          <a href="menu.html" className="contactrecipe">
            <img src={cherryImage} className="contactrecipe-img" alt="Cherry Tomato Pasta Salad" />
            <h5>Cherry Tomato Pasta Salad</h5>
            <p>Prep : 15min | Cook : 5min</p>
          </a>
          <a href="menu.html" className="contactrecipe">
            <img src={puttanescaImage} className="contactrecipe-img" alt="Puttanesca with Angel Hair Pasta" />
            <h5>Puttanesca with Angel Hair Pasta</h5>
            <p>Prep : 15min | Cook : 5min</p>
          </a>
          <a href="menu.html" className="contactrecipe">
            <img src={creamyPastaImage} className="contactrecipe-img" alt="Creamy Pasta with Spinach" />
            <h5>Creamy Pasta with Spinach</h5>
            <p>Prep : 15min | Cook : 5min</p>
          </a>
        </div>
      </section>
      
      <footer className="contactpage-footer">
        <p>
          &copy; <span id="date">{new Date().getFullYear()}</span>
          <span className="footer-logo">SimplyRecipes</span> Created by
          <a href="https://SAVORDELIGHT/"> Culinary Enthusiast</a>
        </p>
      </footer>
    </div>
  );
};

export default ContactPage;