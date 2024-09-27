// src/App.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';  // Importing the routes from routes.js
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />  {/* The Header will be shown on all pages */}
        <AppRoutes />  {/* The routes are defined in routes.js */}
        <Footer />  {/* The Footer will be shown on all pages */}
      </div>
    </Router>
  );
};

export default App;
