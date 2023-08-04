import React, { useState } from 'react';
import Collapse from './Collapse';
import './App.css';

const DetailLocation = ({ locationData }) => {
  const collapses = [
    {
      title: 'Description',
      content: locationData.description,
      backgroundColor: '#f6f6f6',
    },
    {
      title: 'Équipements',
      content: '', // You can leave this empty as we'll display the equipment list in the Collapse section
      equipmentList: locationData.equipments,
      backgroundColor: '#f6f6f6',
    },
  ];

  // State to manage the collapsed state of each item
  const [collapsedStates, setCollapsedStates] = useState(collapses.map(() => true));

  // Function to toggle the collapsed state for a specific item
  const handleToggle = (index) => {
    setCollapsedStates((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="detailsLocationContain">
      <div className="details">
        <div className="left-details">
          <h1>{locationData.title}</h1>
          <h2>{locationData.location}</h2>
          <div className="contain-btnfilters">
            {locationData.tags.map((tag) => (
              <button key={tag}>{tag}</button>
            ))}
          </div>
        </div>
        <div className="right-details">
          <div className="contain-namereview">
            <h3>{locationData.host.name}</h3>
            <img className="profile-pic" src={locationData.host.picture} alt="profile of location" />
          </div>
          {/* SVG and other details go here */}
        </div>
      </div>
      <div className="contain-collapse-details">
        {collapses.map((item, index) => (
          <Collapse
            key={index}
            title={item.title}
            content={item.content}
            equipmentList={item.equipmentList}
            collapsed={collapsedStates[index]}
            onToggle={() => handleToggle(index)}
            backgroundColor={item.backgroundColor}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailLocation;
