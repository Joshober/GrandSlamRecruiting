import React, { useState, useEffect } from "react";
import axios from "axios";
import './FacebookPageFeed.css'; // Import CSS for styling

const FacebookPageFeed = () => {
  const [feed, setFeed] = useState([]);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = 3000;

  // Use the access token from the environment variable
  const pageAccessToken = process.env.REACT_APP_FACEBOOK_PAGE_ACCESS_TOKEN;
  const pageId = "472404942611717";

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await axios.get(
          `https://graph.facebook.com/v20.0/${pageId}/feed?access_token=${pageAccessToken}&fields=message,story,created_time,attachments`
        );
        setFeed(response.data.data);
      } catch (error) {
        console.error("Error fetching Facebook page feed", error);
        setError(
          "Failed to fetch Facebook page feed. Please check the token or permissions."
        );
      }
    };

    fetchFeed();
  }, [pageAccessToken, pageId]);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feed.length);
    }, slideInterval);

    return () => clearInterval(autoSlide);
  }, [feed.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
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
