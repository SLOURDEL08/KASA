import React, { useState } from 'react';
import Collapse from './Collapse';
import './App.css';
import ImageBelow from './ImageBelow.js';


const AboutPage = () => {
  const collapses = [
    {
      title: 'Fiabilité',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacus libero, malesuada quis nulla et, aliquam tempor ipsum. Duis ut turpis id sem ornare commodo eu non erat. Sed ut massa ac mi pharetra commodo ut quis enim. Nullam maximus volutpat lacus in ultricies. Pellentesque interdum euismod pellentesque. Mauris eu ipsum in arcu sodales convallis. Morbi quam ex, rhoncus ultrices leo sit amet, dictum laoreet ipsum. Sed rutrum nisl enim, at hendrerit augue consectetur eget.',
      backgroundColor: '#f6f6f6', // Set your desired background color here

    },
    {
      title: 'Respect',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacus libero, malesuada quis nulla et, aliquam tempor ipsum. Duis ut turpis id sem ornare commodo eu non erat. Sed ut massa ac mi pharetra commodo ut quis enim. Nullam maximus volutpat lacus in ultricies. Pellentesque interdum euismod pellentesque. Mauris eu ipsum in arcu sodales convallis. Morbi quam ex, rhoncus ultrices leo sit amet, dictum laoreet ipsum. Sed rutrum nisl enim, at hendrerit augue consectetur eget.', 
      backgroundColor: '#f6f6f6', // Vous pouvez ajuster la couleur de fond ici
    },
    {
      title: 'Service',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacus libero, malesuada quis nulla et, aliquam tempor ipsum. Duis ut turpis id sem ornare commodo eu non erat. Sed ut massa ac mi pharetra commodo ut quis enim. Nullam maximus volutpat lacus in ultricies. Pellentesque interdum euismod pellentesque. Mauris eu ipsum in arcu sodales convallis. Morbi quam ex, rhoncus ultrices leo sit amet, dictum laoreet ipsum. Sed rutrum nisl enim, at hendrerit augue consectetur eget.', 
      backgroundColor: '#f6f6f6', // Vous pouvez ajuster la couleur de fond ici
    },
    {
      title: 'Sécurité',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacus libero, malesuada quis nulla et, aliquam tempor ipsum. Duis ut turpis id sem ornare commodo eu non erat. Sed ut massa ac mi pharetra commodo ut quis enim. Nullam maximus volutpat lacus in ultricies. Pellentesque interdum euismod pellentesque. Mauris eu ipsum in arcu sodales convallis. Morbi quam ex, rhoncus ultrices leo sit amet, dictum laoreet ipsum. Sed rutrum nisl enim, at hendrerit augue consectetur eget.', 
      backgroundColor: '#f6f6f6', // Vous pouvez ajuster la couleur de fond ici
    },
  ];

  // State to manage the collapsed state of each item
  const [collapsedStates, setCollapsedStates] = useState(
    collapses.map(() => true)
  );

  // Function to toggle the collapsed state for a specific item
  const handleToggle = (index) => {
    setCollapsedStates((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="about">
      <ImageBelow imageUrl="kalen.jpg" showOverlayText={false} />
          <div className="aboutpage-about">
            <div className="aboutpage-contain-collapse-details">
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

    </div>
  );
  
}

export default AboutPage;
