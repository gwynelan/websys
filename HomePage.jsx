
import { Link } from 'react-router-dom';
import '../css/web.css';
import creamyGarlicPastaImage from '../img/Creamy-garlic-pasta.jpeg';
import cheeseburgerPastaImage from '../img/Cheeseburger-Pasta-.jpeg';
import mackerelBeetrootImage from '../img/chargrilled-mackerel-with-sweet-sour-beetroot.jpeg';
import pastabg from '../img/pastabg.jpg'; 
import slider1Image from '../img/slider1.jpg';
import slider2Image from '../img/slider2.jpg';
import Slideshow from '../javascript/web.js'; // Import Slideshow component

const HomePage = () => {
  return (
    <div>
      <header>
        <div className="home-page-title">Savor Delight</div>
        <nav className="home-page-main-menu">
          <ul>
            <li><Link to="/elan-lumay/about">About</Link></li>
            <li><Link to="/elan-lumay/menu">Menu</Link></li>
            <li><Link to="/elan-lumay/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      
      <div className="home-page-welcome-section">
        <div className="home-page-container">
          <h2>Welcome to Savor Delight</h2>
          <p>Experience the finest dining in town</p>
          <Link to="/menu" className="home-page-button">View Menu</Link>
        </div>
      </div>
      
      <div id="home-page-about-section">
        <div className="home-page-container">
          <h2>About Us</h2>
          <p>Savor Delight is a restaurant that offers a wide range of delectable dishes prepared by our expert chefs. We strive to provide a memorable dining experience for our customers.</p>
          <Slideshow images={[pastabg, slider1Image, slider2Image]} />
        </div>
      </div>
      
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
      
      <section id="home-page-contact-section">
        <div className="home-page-container">
          <h2>Contact Us</h2>
          <p>For reservations or inquiries, please feel free to reach out to us.</p>
          <div className="home-page-contact-info">
            <p><strong>Address:</strong> 123 Main Street, Cagayan de Oro City, Philippines</p>
            <p><strong>Phone:</strong> +63 930-241-6804</p>
            <p><strong>Email:</strong> <a href="mailto:info@savordelight.com">info@savordelight.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;