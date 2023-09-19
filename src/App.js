import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import LocationPage from './pages/LocationPage';
import jsonData from './data.json';
import Footer from './components/Footer'; // Assurez-vous d'importer le composant Footer

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/location" element={<LocationList />} />
          {jsonData.map((location) => (
            <Route
              key={location.id}
              path={`/location/${location.id}`}
              element={<LocationPage locationData={location} />} 
            />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

const LocationList = () => {
  return (
    <div>
      {jsonData.map((location) => (
        <LocationPage key={location.id} locationData={location} /> 
      ))}
    </div>
  );
};

export default App;
