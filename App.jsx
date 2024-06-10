import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './css/web.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/elan-lumay" element={<HomePage />} />
        <Route path="/elan-lumay/about" element={<AboutPage />} />
        <Route path="/elan-lumay/contact" element={<ContactPage />} />
        <Route path="/elan-lumay/menu" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
