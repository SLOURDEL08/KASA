import React, { useState } from 'react';

const Collapse = ({ title, content, equipmentList, backgroundColor }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="collapse-container" style={{ height: collapsed ? '45px' : 'auto' }}>
      <div className="header-col" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <div className={`icon ${collapsed ? 'collapsed' : 'expanded'}`}>&#x25BC;</div>
      </div>
      {!collapsed && (
        <div className="content-col" style={{ backgroundColor }}>
          <p>{content}</p>
          {equipmentList && equipmentList.length > 0 && (
            <div className="equipment-list">
              <ul>
                {equipmentList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Collapse;
