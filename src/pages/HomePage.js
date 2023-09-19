
import React from 'react';
import '../assets/css/App.scss';
import ImageBelow from '../components/ImageBelow';
import Main from '../components/Main';



function HomePage() {
  return (
    <div>
      <ImageBelow imageUrl="e270fc8fc902a1eb738458e7b29c1899.jpeg" showOverlayText={true}  />
      <Main />
    </div>
  );
}

export default HomePage;