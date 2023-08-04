import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import previousIcon from './img/prev.png';
import nextIcon from './img/next.png';

const SliderMain = ({ images }) => {
  const sliderRef = React.createRef();

  if (images.length === 1) {
    // If there's only one image, directly render it without using the Slider component
    return (
      <div className="slider-container">
        <div className="slider-item">
          <img src={images[0]} alt="Slide 1" />
        </div>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = images.map((image, index) => (
    <div key={index} className="slider-item">
      <img src={image} alt={`Slide ${index + 1}`} />
    </div>
  ));

  return (
    <div className="slider-container">
      <div className="slider-navigation-icons">
        <img
          className="slider-prev-icon"
          src={previousIcon}
          alt="Précédent"
          onClick={() => sliderRef.current.slickPrev()}
        />
        <Slider ref={sliderRef} {...settings}>
          {slides}
        </Slider>
        <img
          className="slider-next-icon"
          src={nextIcon}
          alt="Suivant"
          onClick={() => sliderRef.current.slickNext()}
        />
      </div>
    </div>
  );
};

SliderMain.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SliderMain;
