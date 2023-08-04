import React, { useState } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    'url_de_l_image_1',
    'url_de_l_image_2',
    'url_de_l_image_3',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <img className="slide" src={images[currentSlide]} alt={`Slide ${currentSlide}`} />
      <div className="prev" onClick={prevSlide}>
        <img src="prev.png" alt="Previous" />
      </div>
      <div className="next" onClick={nextSlide}>
        <img src="next.png" alt="Next" />
      </div>
    </div>
  );
};

export default Slider;
