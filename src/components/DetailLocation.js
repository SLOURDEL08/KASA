import React, { useState } from 'react';
import Collapse from './Collapse';
import '../assets/css/App.scss';
import etoilerouge from '../assets/img/etoilerouge.png';
import etoilegris from '../assets/img/etoilegris.png';


const DetailLocation = ({ locationData }) => {
  const collapses = [
    {
      title: 'Description',
      content: locationData.description,
      backgroundColor: '#f6f6f6',
    },
    {
      title: 'Équipements',
      content: '', 
      equipmentList: locationData.equipments,
      backgroundColor: '#f6f6f6',
    },
  ];

  const [collapsedStates, setCollapsedStates] = useState(collapses.map(() => true));

  const handleToggle = (index) => {
    setCollapsedStates((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<img key={i} className="starz" src={etoilerouge} alt="filled star" />); 
      } else {
        stars.push(<img key={i} className="starz" src={etoilegris} alt="empty star" />); 
      }
    }
    return stars;
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
            <h3 className="title-name">{locationData.host.name}</h3>
            <img className="profile-pic" src={locationData.host.picture} alt="profile of location" />
          </div>
          <div className="stars-container">{renderStars(locationData.rating)}</div>
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
