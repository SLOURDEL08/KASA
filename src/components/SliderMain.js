import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import previousIcon from '../assets/img/prev.png';
import nextIcon from '../assets/img/next.png';

const SliderMain = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0); // État local pour stocker le numéro de la diapositive actuelle
  const sliderRef = React.createRef();

  if (images.length === 1) {
    // Si une seule image, affichez-la directement
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
    afterChange: (current) => setCurrentSlide(current), // Mettre à jour le numéro de la diapositive actuelle
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
        <div className="current-slide-indicator">
        {currentSlide + 1}/{images.length} {/* Affiche le numéro de la diapositive actuelle */}
      </div>
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
