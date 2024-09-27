// src/components/Footer.js

import React from 'react';
import './Footer.css'; // Optional: for custom styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
