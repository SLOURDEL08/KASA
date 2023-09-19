import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/App.scss';
import jsonData from '../data.json';

const Main = () => {
  const [displayCount, setDisplayCount] = useState(6); 

  const handleShowMore = () => {
    setDisplayCount(prevCount => prevCount + 6); 
  };

  return (
    <div className="main-part">
      {jsonData.slice(0, displayCount).map((location) => (
        <Link
          to={`/location/${location.id}`} 
          key={location.id} 
          style={{
            backgroundImage: `url(${location.cover})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
          className="items-mainpart"
        >
          <div className="content-mainpart">
          <h3 className="title-location">
  {location.title.length > 20
    ? (
      <>
        {location.title.slice(0, 20)}<br />
        {location.title.slice(20)}
      </>
    )
    : location.title}
</h3>
         </div>
        </Link>
      ))}
      {displayCount < jsonData.length && ( 
        <button onClick={handleShowMore} className="show-more-button">
          Afficher plus
        </button>
      )}
    </div>
  );
}

export default Main;
