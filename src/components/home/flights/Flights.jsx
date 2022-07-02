import React, { useState } from 'react';
import FormField from './FormField';
import SideImageCard from '../../ui/cards/SideImageCard';
import './flights.css';

const Flights = () => {
  const trip = ['Oneway', 'Round Trip', 'Multy city'];
  const [tripType, setTripType] = useState('Oneway');

  const checkActiveTrip = (type) => {
    return type === tripType ? 'active trip-item' : 'trip-item';
  };

  const handletripType = (index) => {
    setTripType(trip[index]);
  };

  return (
    <div className='flights'>
      <div className='flights-search flex flex--column'>
        <div className='flights-trip'>
          <ul className='trip-list'>
            {trip.map((trip, index) => {
              return (
                <li
                  onClick={() => {
                    handletripType(index);
                  }}
                  key={index}
                  className={checkActiveTrip(trip)}>
                  {trip}
                </li>
              );
            })}
          </ul>
        </div>
        <div className='flights-search-form'>
          <form className='search-form flex flex--column'>
            <div className='search-row'>
              <FormField icon='ri-map-pin-2-fill' headerTitle='from' footerTitle='Usmani airport, Sylhet' value='Dhaka, Bangladesh' />
              <FormField icon='ri-map-pin-2-fill' headerTitle='to' footerTitle='Shuvas chandra bosu airport' value='Dilhi, India' />
              <FormField icon='ri-map-pin-2-fill' headerTitle='class' footerTitle='Business' value='3 Persons' />
            </div>
            <div className='search-row'>
              <FormField icon='ri-calendar-2-line' headerTitle='Departure' footerTitle='Sunday' value='21 Aug’20' />
              <FormField icon='ri-calendar-2-line' headerTitle='return' footerTitle='Sunday' value='29 Aug’20' />
              <button type='submit' className='btn--search'>
                search flight
              </button>
            </div>
          </form>
        </div>

        <div className='spacial-offers flex'>
          <SideImageCard />
          <SideImageCard />
        </div>
      </div>
    </div>
  );
};

export default Flights;
