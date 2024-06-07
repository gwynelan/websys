import React from 'react';
import '../css/contact.css';
import cherryImage from '../img/cherry.jpg';
import puttanescaImage from '../img/puttanesca.jpeg';
import creamyPastaImage from '../img/creamypasta.jpg';
import logo from '../img/logo.png';

const ContactPage = () => {
  return (
    <div className="contactpage-container">
      
      <nav className="contactpage-navbar">
        <div className="contactnav-center">
          <div className="contactnav-header">
            <a href="about.html" className="contactnav-logo">
              <img src={logo} alt="simply recipes" />
            </a>
            <button className="contactnav-btn">
              <i className="fas fa-align-justify"></i>
            </button>
          </div>
          <div className="contactpage-nav-links">
            <a href="web.html" className="contactnav-link"> home </a>
            <a href="/about" className="contactnav-link"> about </a>
            <a href="menu.html" className="contactnav-link"> Menu </a>
          </div>
        </div>
      </nav>
      
      <main className="contactpage-page">
        <section className="contactpage-container">
          <article className="contactpage-info">
            <h3>Culinary Inspiration at Your Fingertips</h3>
            <p>
              Immerse yourself in a world of culinary delights! From timeless classics to innovative creations, our contact page is your ultimate destination for all things culinary. Get in touch with your inner chef and let your taste buds embark on a tantalizing journey!
            </p>
            <p>Savor every bite of our delectable offerings, from mouthwatering pasta dishes to indulgent desserts. Let your imagination run wild as you explore our diverse range of recipes and culinary inspiration!</p>
            <p>
              Whether you're a seasoned chef or a novice cook, our contact page has something for everyone. Join us on a culinary adventure and let your creativity flourish!
            </p>
          </article>
          <article>
            <form className="contactpage-form contact-form">
              <div className="contactform-row">
                <label htmlFor="name" className="form-label">your name</label>
                <input type="text" name="name" id="name" className="form-input" />
              </div>
              <div className="form-row">
                <label htmlFor="email" className="form-label">your email</label>
                <input type="text" name="email" id="email" className="form-input" />
              </div>
              <div className="form-row">
                <label htmlFor="message" className="form-label">message</label>
                <textarea name="message" id="message" className="form-textarea"></textarea>
              </div>
              <button type="submit" className="btn btn-block">
                submit
              </button>
            </form>
          </article>
        </section>
        {/* featured recipes */}
        <section className="contactpage-featured-recipes">
          <h5 className="contactfeatured-title">Indulge in These Culinary Delights!</h5>
          <div className="contactrecipes-list">
            {/* single recipe */}
            <a href="menu.html" className="recipe">
              <img
                src={cherryImage}
                className="contactrecipe-img"
                alt=""
              />
              <h5>Cherry Tomato Pasta Salad </h5>
              <p>Prep : 15min | Cook : 5min</p>
            </a>
            {/* end of single recipe */}
            {/* single recipe */}
            <a href="menu.html" className="contactrecipe">
              <img
                src={puttanescaImage}
                className="contactrecipe-img"
                alt=""
              />
              <h5>Puttanesca with Angel Hair Pasta</h5>
              <p>Prep : 15min | Cook : 5min</p>
            </a>
            {/* end of single recipe */}
            {/* single recipe */}
            <a href="menu.html" className="contactrecipe">
              <img
                src={creamyPastaImage}
                className="contactrecipe-img"
                alt=""
              />
              <h5>Creamy Pasta with Spinach</h5>
              <p>Prep : 15min | Cook : 5min</p>
            </a>
            {/* end of single recipe */}
          </div>
        </section>
      </main>
      {/* footer */}
      <footer className="contactpage-footer">
        <p>
          &copy; <span id="date"></span>
          <span className="footer-logo">SimplyRecipes</span> Created by
          <a href="https://SAVORDELIGHT/">Culinary Enthusiast</a>
        </p>
      </footer>
    </div>
  );
}

export default ContactPage;
