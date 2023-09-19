import React from 'react';
import '../assets/css/App.scss';
import SliderMain from '../components/SliderMain';
import DetailLocation from '../components/DetailLocation';

function LocationPage({ locationData }) {
  if (!locationData || !locationData.pictures || locationData.pictures.length === 0) {
    return <div>No images available.</div>;
  }

  return (
    <div>
      <SliderMain images={locationData.pictures} />
      <DetailLocation locationData={locationData} />
    </div>
  );
}






export default LocationPage;
