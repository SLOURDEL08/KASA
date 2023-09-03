import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.scss';
import jsonData from './data.json';

const Main = () => {
  const [displayCount, setDisplayCount] = useState(6); // Nombre d'emplacements à afficher

  const handleShowMore = () => {
    setDisplayCount(prevCount => prevCount + 6); // Augmentez le nombre d'emplacements à afficher de 6
  };

  return (
    <div className="main-part">
      {jsonData.slice(0, displayCount).map((location) => (
        <Link
          to={`/location/${location.id}`} // Utilisez le chemin d'URL avec l'ID de l'emplacement
          key={location.id} // Utilisez l'ID de l'emplacement comme clé
          style={{
            backgroundImage: `url(${location.cover})`,
            backgroundPosition: 'center', // Centrer l'image
            backgroundSize: 'cover', // Ajuster la taille de l'image pour remplir l'espace
          }}
          className="items-mainpart"
        >
          <div className="content-mainpart">
            <h3 className="title-location">{location.title}</h3>
          </div>
        </Link>
      ))}
      {displayCount < jsonData.length && ( // Afficher le bouton "Afficher plus" si tous les emplacements n'ont pas encore été affichés
        <button onClick={handleShowMore} className="show-more-button">
          Afficher plus
        </button>
      )}
    </div>
  );
}

export default Main;
