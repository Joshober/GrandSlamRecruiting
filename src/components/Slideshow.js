// src/components/SlideShow.js

import React, { useState, useEffect } from 'react';
import './SlideShow.css';  // CSS for styling the slideshow

const SlideShow = ({ imageUrl }) => {
  const [offsetX, setOffsetX] = useState(0);
  const [direction, setDirection] = useState(1);  // 1 for right, -1 for left

  useEffect(() => {
    const slide = setInterval(() => {
      setOffsetX((prevOffsetX) => {
        if (prevOffsetX <= -100 || prevOffsetX >= 0) {
          setDirection((prevDirection) => -prevDirection);  // Reverse direction
        }
        return prevOffsetX + direction * 1;  // Adjust the speed here
      });
    }, 50);  // Adjust the interval for smoother or faster sliding

    return () => clearInterval(slide);  // Cleanup the interval on unmount
  }, [direction]);

  return (
    <div className="slideshow-container">
      <div
        className="slideshow-track"
        style={{
          transform: `translateX(${offsetX}%)`,
        }}
      >
        <img src={imageUrl} alt="Slideshow" />
      </div>
    </div>
  );
};

export default SlideShow;
