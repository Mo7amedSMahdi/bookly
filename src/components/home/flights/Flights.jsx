import React, { useState } from 'react';
import FormField from './FormField';
import SideImageCard from '../../ui/cards/SideImageCard';
import ListItem from '../../ui/list/ListItem';
import AdBanner from '../../ui/banners/AdBanner';
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
    <div className='flights flex flex--column'>
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
      </div>
      <div className='offers flex flex--column'>
        <h2 className='section-title'>Special Offer</h2>
        <div className='spacial-offers flex'>
          <SideImageCard
            image='https://picsum.photos/201/301'
            tag='Citytuch'
            title='Up to $599 discount'
            subTitle='Domestic flight'
            coupon='dhshjab09d'
          />
          <SideImageCard
            image='https://picsum.photos/202/302'
            tag='Citytuch'
            title='Up to $599 discount'
            subTitle='Domestic flight'
            coupon='dhshjab09d'
          />
          <SideImageCard
            image='https://picsum.photos/200/300'
            tag='Citytuch'
            title='Up to $599 discount'
            subTitle='Domestic flight'
            coupon='dhshjab09d'
          />
        </div>
      </div>
      <div className='best-offers flex flex--column'>
        <div className='section-header flex'>
          <h2 className='section-title'>Best offers</h2>
          <a href='#' className='btn btn--text'>
            view more
          </a>
        </div>
        <div className='offers-list flex flex--column'>
          <ListItem image='https://random.imagecdn.app/500/500' title='Delhi, Toronto, Mexico' price='546' date='15 Aug - 22 Aug' />
          <ListItem image='https://random.imagecdn.app/501/501' title='Chennai, Mumbai' price='345' date='15 Aug - 22 Aug' />
          <ListItem image='https://random.imagecdn.app/502/502' title='Mumbai, Bangalore, Pune' price='435' date='15 Aug - 22 Aug' />
          <ListItem image='https://random.imagecdn.app/503/503' title='Pune, Mumbai, Kolkata' price='541' date='15 Aug - 22 Aug' />
          <ListItem image='https://random.imagecdn.app/504/504' title='Mumbai, Bangalore' price='390' date='15 Aug - 22 Aug' />
        </div>
      </div>
      <div className='banner'>
        <AdBanner title='Book Your Perfect Deals' price='547' priceTitle='Starting at' />
      </div>
    </div>
  );
};

export default Flights;
