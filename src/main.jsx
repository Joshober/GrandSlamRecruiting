// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';  // Import any global styles
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';  // Make sure this path is correct

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <div className="App">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);
