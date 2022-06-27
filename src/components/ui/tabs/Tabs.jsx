import React, { useState } from 'react';
import Flights from '../../home/flights/Flights';
import Hotels from '../../home/hotels/Hotels';
import Villa from '../../home/villa/Villa';
import Taxi from '../../home/taxi/Taxi';

import './tabs.css';
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      tabIndex: 0,
      tabTitle: 'flights',
    },
    {
      tabIndex: 1,
      tabTitle: 'hotels',
    },
    {
      tabIndex: 2,
      tabTitle: 'villa',
    },
    {
      tabIndex: 3,
      tabTitle: 'taxi',
    },
  ];

  const checkActiveTab = (tabIndex) => {
    return tabIndex === activeTab ? 'active tab-item' : 'tab-item';
  };

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="tabs">
      <div className="tabs-header">
        <ul className="tabs-list">
          {tabs.map((tab) => {
            return (
              <li key={tab.tabIndex} className={checkActiveTab(tab.tabIndex)}>
                <button
                  onClick={() => {
                    handleTabClick(tab.tabIndex);
                  }}
                  type="button"
                  className="tab-button"
                >
                  <i className="fas fa-home" />
                  {tab.tabTitle}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="tabs-content">
        {activeTab === 0 && <Flights />}
        {activeTab === 1 && <Hotels />}
        {activeTab === 2 && <Villa />}
        {activeTab === 3 && <Taxi />}
      </div>
    </div>
  );
};

export default Tabs;
