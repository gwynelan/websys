import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/menu.css'; 
import creamyGarlicPastaImage from '../img/Creamy-garlic-pasta.jpeg';
import cheeseburgerPastaImage from '../img/Cheeseburger-Pasta-.jpeg';
import mackerelBeetrootImage from '../img/chargrilled-mackerel-with-sweet-sour-beetroot.jpeg';
import richPastaImage from '../img/richpasta.webp';
import cherryTomatoImage from '../img/cherry.jpg';
import filSpaghettiImage from '../img/filspagh.jpg';
import puttanescaImage from '../img/puttanesca.jpeg';
import garlicMushroomImage from '../img/garlic.jpg';
import sunDriedTomatoImage from '../img/sun-dried.jpg';
import allPuttanescaImage from '../img/allputs.jpg';
import creamySpinachImage from '../img/creamypasta.jpg';
import creamyCheeseImage from '../img/creamycheese.jpg';

const MenuPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'savordelight/src/javascript/menuscript.js'; // Import the script file
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="search">
      <h1>Food Recipe</h1>
      <div className="search-box">
        <div className="search-field">
          <input placeholder="Search food or ingredients..." className="input" type="text" id="searchInput" />
          <div className="search-box-icon">
            <button className="btn-icon-content" id="searchButton">
              <i className="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill="#fff" />
                </svg>
              </i>
            </button>
          </div>
        </div>
      </div>
      <Link to="/" className="home-button">Home</Link>

      <section className="mainmenus">
        <div className="mainrecipe" id="menu">
          <h2>Best Dishes</h2>
          <div className="box menu-gallery">
            {/* Menu items */}
            <div className="card menu-item">
              <h3>Creamy Garlic Pasta</h3>
              <p>This creamy tagliatelle recipe makes a comforting midweek meal. Any long pasta will work, so use whatever you have in the cupboard.</p>
              <img src={creamyGarlicPastaImage} alt="Creamy Garlic Pasta" />
              <div className="content">
                <a href="recipe.html" className="recipe-button">View Recipe</a>
              </div>
            </div>
            <div className="card menu-item">
              <h3>One-Pot Cheeseburger Pasta</h3>
              <p>Combine the best of two comfort foods in one dish – perfect for a Friday night treat. Top with pickles and jalapeños to serve.</p>
              <img src={cheeseburgerPastaImage} alt="One-Pot Cheeseburger Pasta" />
              <div className="content">
                <a href="recipe.html" className="recipe-button">View Recipe</a>
              </div>
            </div>
            <div className="card menu-item">
              <h3>Chargrilled Mackerel with Sweet Sour Beetroot</h3>
              <p>Delicious smoked, baked, or grilled on the barbecue.</p>
              <img src={mackerelBeetrootImage} alt="Chargrilled Mackerel with Sweet Sour Beetroot" />
              <div className="content">
                <a href="recipe.html" className="recipe-button">View Recipe</a>
              </div>
            </div>
            <div className="card menu-item">
              <h3>Rich Pasta for the Poor Kitchen</h3>
              <p>These buttered noodles are simple and quick. Pasta is tossed with butter, parsley, and Parmesan cheese.</p>
              <img src={richPastaImage} alt="Rich Pasta for the Poor Kitchen" />
              <div className="content">
                <a href="recipe.html" className="recipe-button">View Recipe</a>
              </div>
            </div>
            <div className="card menu-item">
              <h3>Cherry Tomato Pasta Salad</h3>
              <p>A juicy and bursting with flavor pasta salad made with tomatoes, garlic, basil, and olive oil. Simple and so good.</p>
              <img src={cherryTomatoImage} alt="Cherry Tomato Pasta Salad" />
              <div className="content">
                <a href="recipe.html" className="recipe-button">View Recipe</a>
              </div>
            </div>
            <div className="card menu-item">
              <h3>Filipino Spaghetti</h3>
              <p>This recipe is every kid’s favorite – Filipino Spaghetti – Spaghetti, hot dogs, tomato sauce, and seasonings. So simple, so good.</p>
              <img src={filSpaghettiImage} alt="Filipino Spaghetti" />
              <div className="content">
                <a href="recipe.html" className="recipe-button">View Recipe</a>
              </div>
            </div>
            <div className="card menu-item">
              <h3>Puttanesca with Angel Hair Pasta</h3>
              <p>Canned tomatoes, capers, black olives and anchovies combine to make a tangy and traditional puttanesca sauce.</p>
              <img src={puttanescaImage} alt="Puttanesca with Angel Hair Pasta" />
              <div className="content">
                <a href="recipe.html" className="recipe-button">View Recipe</a>
              </div>
            </div>
            <div className="card menu-item">
              <h3>Quick Garlic Mushroom Pasta</h3>
              <p>The smell of the garlic and the intensely flavored gravy released from the mushrooms take your basic spaghetti to the next level.</p>
              <img src={garlicMushroomImage} alt="Quick Garlic Mushroom Pasta" />
              <div className="content">
                <a href="recipe.html" className="recipe-button">View Recipe</a>
              </div>
            </div>
            <div className="card menu-item">
              <h3>Sun-Dried Tomato Pasta</h3>
              <p>This is a super quick recipe made with pasta, creamy ricotta, and intensely-flavored sun-dried tomatoes.</p>
              <img src={sunDriedTomatoImage} alt="Sun-Dried Tomato Pasta" />
              <div className="content">
                <a href="recipe.html" className="recipe-button">View Recipe</a>
              </div>
            </div>
            <div className="card menu-item">
              <h3>Spaghetti Alla Puttanesca</h3>
              <p>This is a luscious bowl of pasta where anchovies, capers, and olives bring amazing fiery flavors.</p>
              <img src={allPuttanescaImage} alt="Spaghetti Alla Puttanesca" />
              <div className="content">
                <a href="recipe.html" className="recipe-button">View Recipe</a>
              </div>
            </div>
            <div className="card menu-item">
              <h3>Creamy Pasta with Spinach</h3>
              <p>This is another terrific quick pasta recipe, it’s packed with spinach, and it’s easy and ready in less than 15 minutes. A weeknight meal the whole family will love.</p>
              <img src={creamySpinachImage} alt="Creamy Pasta with Spinach" />
              <div className="content">
                <a href="recipe.html" className="recipe-button">View Recipe</a>
              </div>
            </div>
            <div className="card menu-item">
              <h3>Creamy Cheese Pasta</h3>
              <p>Combine the best of two comfort foods in one dish – perfect for a Friday night treat. Top with pickles and jalapeños to serve.</p>
              <img src={creamyCheeseImage} alt="Creamy Cheese Pasta" />
              <div className="content">
                <a href="recipe.html" className="recipe-button">View Recipe</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
