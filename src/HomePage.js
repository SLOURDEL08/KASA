
import React from 'react';
import './App.scss';
import ImageBelow from './ImageBelow.js';
import Main from './Main.js';



function HomePage() {
  return (
    <div>
      <ImageBelow imageUrl="e270fc8fc902a1eb738458e7b29c1899.jpeg" showOverlayText={true}  />
      <Main />
    </div>
  );
}

export default HomePage;