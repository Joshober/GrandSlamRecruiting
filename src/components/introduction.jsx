// src/components/Introduction.js

import React from 'react';
import './Introduction.css'; // Import the new CSS file
import { Link } from 'react-router-dom';

const Introduction = () => {
  return (
    <div className="introduction-container">
      <h1 className="intro-title">GET SCOUTED. GET RECRUITED.</h1>
      <section className="intro-section">
        <p className="section-description">
       At  we specialize in empowering student-athletes with the knowledge and skills needed to navigate the college recruiting process. Our mission is to bridge the gap between aspiring athletes and college coaches through comprehensive seminars and workshops. We provide expert guidance on how to stand out, connect with coaches, and maximize opportunities to secure athletic scholarships.

Our seminars cover essential topics such as crafting standout profiles, creating highlight reels, understanding NCAA eligibility, and building effective communication strategies with coaches. With insights from former college coaches, athletes, and recruiting professionals, we equip athletes and their families with the tools to confidently pursue their collegiate athletic dreams.

Join us to take the next step in your athletic journey and find the right collegiate home!
        </p>
      </section>
      <div className="section-container">
        <div className="section">
          <div className="section-content">
            <p>PARENTS AND ATHLETES</p>
          </div>
          <div className="section-button">
            <Link to="/about" className="start-button">START HERE</Link>
          </div>
        </div>

        <div className="section">
          <div className="section-content">
            <p>COLLEGE COACHES</p>
          </div>
          <div className="section-button">
            <Link to="/about" className="start-button">START HERE</Link>
          </div>
        </div>

        <div className="section">
          <div className="section-content">
            <p>H.S. AND CLUB COACHES</p>
          </div>
          <div className="section-button">
            <Link to="/about" className="start-button">START HERE</Link>
          </div>
        </div>
      </div>

      <div className="social-media">
        <h3>FOLLOW US ON SOCIAL MEDIA</h3>
        <div className="social-media-icons">
          {/* Add your social media icons here */}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
