import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import LocationPage from './LocationPage';
import jsonData from './data.json';
import Footer from './Footer'; // Assurez-vous d'importer le composant Footer

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />

        {/* Définition des routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/location" element={<LocationList />} />
          {/* Utilisez l'ID de l'emplacement comme paramètre dans l'URL */}
          {jsonData.map((location) => (
            <Route
              key={location.id}
              path={`/location/${location.id}`}
              element={<LocationPage locationData={location} />} // Passez l'objet location en tant que locationData
            />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {/* Ajoutez le composant Footer ici */}
        <Footer />
      </div>
    </Router>
  );
}

// LocationList component to display the list of locations
const LocationList = () => {
  return (
    <div>
      {jsonData.map((location) => (
        <LocationPage key={location.id} locationData={location} /> /* Passez l'objet location en tant que locationData */
      ))}
    </div>
  );
};

export default App;
