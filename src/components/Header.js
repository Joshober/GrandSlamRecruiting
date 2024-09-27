// src/components/Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src="DALL·E 2024-09-26 10.22.01 - Design a logo for a company named 'Grand Slam Recruiting'. The logo should feature a modern and dynamic look, incorporating elements of sports and rec (1).png" alt="ScoutU Logo" className="logo" />
      </div>
      <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/about-us" className="nav-link">ABOUT US</Link>
          </li>
          <li className="nav-item">
            <Link to="/what-we-do" className="nav-link">WHAT WE DO</Link>
          </li>
          <li className="nav-item">
            <Link to="/testimonials" className="nav-link">TESTIMONIALS</Link>
          </li>
          <li className="nav-item">
            <Link to="/athlete-signings" className="nav-link">ATHLETE SIGNINGS</Link>
          </li>
          <li className="nav-item">
            <Link to="/recruiting-tips" className="nav-link">RECRUITING TIPS</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className="nav-link">CONTACT US</Link>
          </li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="menu-icon">&#9776;</span>
      </button>
    </header>
  );
};

export default Header;
