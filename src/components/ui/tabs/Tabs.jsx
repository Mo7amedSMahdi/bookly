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
      tabIcon: 'ri-flight-takeoff-line',
    },
    {
      tabIndex: 1,
      tabTitle: 'hotels',
      tabIcon: 'ri-hotel-bed-fill',
    },
    {
      tabIndex: 2,
      tabTitle: 'villa',
      tabIcon: 'ri-home-6-fill',
    },
    {
      tabIndex: 3,
      tabTitle: 'taxi',
      tabIcon: 'ri-taxi-fill',
    },
  ];

  const checkActiveTab = (tabIndex) => {
    return tabIndex === activeTab ? 'active tab-item flex flex--column' : 'tab-item flex flex--column';
  };

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className='tabs flex flex--column'>
      <div className='tabs-header'>
        <ul className='tabs-list flex'>
          {tabs.map((tab) => {
            return (
              <li
                onClick={() => {
                  handleTabClick(tab.tabIndex);
                }}
                key={tab.tabIndex}
                className={checkActiveTab(tab.tabIndex)}>
                <i className={tab.tabIcon} />
                {tab.tabTitle}
              </li>
            );
          })}
        </ul>
      </div>
      <div className='tabs-content'>
        {activeTab === 0 && <Flights />}
        {activeTab === 1 && <Hotels />}
        {activeTab === 2 && <Villa />}
        {activeTab === 3 && <Taxi />}
      </div>
    </div>
  );
};

export default Tabs;
