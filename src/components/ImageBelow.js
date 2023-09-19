import React from 'react';
import '../assets/css/App.scss';

const ImageBelow = ({ imageUrl, showOverlayText }) => {
  return (
    <div className="containImageBelow">
      <div className="imageContainer">
        <img width="1000px" height="200px" className="imageBelow" src={imageUrl} alt=""/>
          <div className="overlay">
          {showOverlayText && (
            <div className="overlayText"><h1>Chez vous, partout et ailleurs</h1></div>
            )}
          </div>
      </div>
    </div>
  );
}

export default ImageBelow;
