import React, { useState } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ images, options }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseMove = (e) => {
    const { x, width } = e.target.getBoundingClientRect();
    const percent = (e.clientX - x) / width;
    const index = Math.floor(percent * images.length);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(0);
  };

  return (
    <div className="carousel-container" style={options === 1 ? {height: '350px'} : null}>
      <div
        className="carousel"
        style={{ backgroundImage: `url(${images[activeIndex]})` }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleMouseMove}
      />
      <div className="buttons">
        {images.map((item, index) => {
          return (
            <span
              key={item + '' + index}
              className={`navButton`}
              id={`${index}`}
              style={
                index === activeIndex
                  ? { backgroundColor: '#fff', boxShadow: '0 0 5px 5 5px #fff' }
                  : null
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;
