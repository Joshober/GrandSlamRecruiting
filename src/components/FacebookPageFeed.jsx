import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FacebookPageFeed.css';
const FacebookPageFeed = () => {
  const [feed, setFeed] = useState(null);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = 3000;
  const pageId = '472404942611717';  // Replace with your actual page ID
  const pageAccessToken = import.meta.env.VITE_FACEBOOK_API_KEY;  // Ensure this is set in your .env file

  useEffect(() => {
    const fetchFacebookFeed = async () => {
      try {
        const response = await axios.get(
          `https://graph.facebook.com/v20.0/${pageId}/feed`,
          {
            params: {
              access_token: pageAccessToken,
              fields: 'message,story,created_time,attachments',
            },
          }
        );

        // Check the response and set the feed data
        if (response.data) {
          setFeed(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching Facebook feed:', error);
        setError('Failed to fetch Facebook page feed. Please check the token or permissions.');
      }
    };

    // Fetch the feed if the access token is present
    if (pageAccessToken) {
      fetchFacebookFeed();
    } else {
      setError('Access token is missing.');
    }
  }, [pageId, pageAccessToken]);

  useEffect(() => {
    if (feed && feed.length > 0) {
      const autoSlide = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % feed.length);
      }, slideInterval);
      return () => clearInterval(autoSlide);
    }
  }, [feed]);

  const handleDotClick = (index) => setCurrentIndex(index);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!feed) {
    return <div>Loading...</div>;
  }

  return (
    <div className="slider-container">
      {feed.length > 0 && (
        <div className="slide">
          <div className="image-container">
            {feed[currentIndex]?.attachments?.data[0]?.media?.image ? (
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
                {feed[currentIndex]?.story || 'HELPING COLLEGE ATHLETIC DREAMS BECOME REALITY'}
              </h1>
              <p className="slide-content">
                {feed[currentIndex]?.message ||
                  'ScoutU provides personal recruiting coordination to qualified student-athletes striving to play in college.'}
              </p>
              <p className="slide-date">
                {new Date(feed[currentIndex]?.created_time).toLocaleString()}
              </p>
              <div className="button-wrapper">
                <a className="slide-button" href="https://www.scoutu.com/contact-us">
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
