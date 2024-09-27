import React, { useState, useEffect } from "react";
import axios from "axios";
import './FacebookPageFeed.css'; // Import CSS for styling

const FacebookPageFeed = () => {
  const [feed, setFeed] = useState([]);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current slide index
  const slideInterval = 3000; // Interval time in milliseconds (3 seconds)

  // Replace this with your actual Page Access Token from the Graph API Explorer
  const pageAccessToken = "EAAR2aYiW45cBO6YzE573bDnlrqGQ9Ncc4IRe5uKlJ7xY5B9sTxeXeNbyGCuSZC9CIlJSPZCVTccVnKJWzn2AoNHQTZBLT4TMJbw8qmkfGiP3g18Yr8Ivhysbhgky6jINWQw52XFe09aroZBrmHQ8tKbpeZBWxS3q3tVP649Ex64wscHbweohtXjx8Hotj535ZCz6oi3HKtaXYACZBsqb37uqn3HbHZARKJvn";
  // Replace with your specific Page ID
  const pageId = "472404942611717";

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        // Make an API request to the Facebook Graph API for page feed data
        const response = await axios.get(
          `https://graph.facebook.com/v20.0/${pageId}/feed?access_token=${pageAccessToken}&fields=message,story,created_time,attachments`
        );
        setFeed(response.data.data); // Set feed data to state
      } catch (error) {
        console.error("Error fetching Facebook page feed", error);
        setError(
          "Failed to fetch Facebook page feed. Please check the token or permissions."
        );
      }
    };

    fetchFeed();
  }, []);

  useEffect(() => {
    // Auto-slide functionality
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feed.length);
    }, slideInterval);

    // Cleanup interval on component unmount
    return () => clearInterval(autoSlide);
  }, [feed.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      {/* <h1 className="slider-title">Facebook Page Feed</h1> */}
      {error && <p className="error-message">{error}</p>}
      {feed.length > 0 && (
        <div className="slide">
          <div className="image-container">
            {feed[currentIndex].attachments &&
            feed[currentIndex].attachments.data[0] &&
            feed[currentIndex].attachments.data[0].media &&
            feed[currentIndex].attachments.data[0].media.image ? (
              <img
                src={feed[currentIndex].attachments.data[0].media.image.src}
                alt="Post image"
                className="slide-image"
              />
            ) : (
              <div className="slide-image no-image">No image available</div>
            )}
            <div className="text-overlay">
              <h1 className="slide-title">
                {feed[currentIndex].story ||
                  "HELPING COLLEGE ATHLETIC DREAMS BECOME REALITY"}
              </h1>
              <p className="slide-content">
                {feed[currentIndex].message ||
                  "ScoutU provides personal recruiting coordination to qualified student-athletes striving to play in college."}
              </p>
              <p className="slide-date">
                {new Date(feed[currentIndex].created_time).toLocaleString()}
              </p>
              <div className="button-wrapper">
                <a
                  className="slide-button"
                  href="https://www.scoutu.com/contact-us"
                >
                  SCOUT ME
                </a>
              </div>
            </div>
          </div>
          <div className="slide-controls">
            {/* <button className="control-button" onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + feed.length) % feed.length)}>
              &#10094; Prev
            </button>
            <button className="control-button" onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % feed.length)}>
              Next &#10095;
            </button> */}
          </div>
          {/* Dot navigation */}
          <div className="dots-container">
            {feed.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FacebookPageFeed;
