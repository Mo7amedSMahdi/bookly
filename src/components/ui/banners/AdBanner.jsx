import React from 'react';
import illustration from '../../../images/flight-Illustration.svg';
import './banner.css';

const AdBanner = ({ title, price, priceTitle, href = '#' }) => {
  return (
    <div className='ad-banner flex'>
      <div className='banner-content flex flex--column'>
        <div className='content-title'>
          <h2>{title}</h2>
        </div>
        <div className='content-price'>
          <p className='flex'>
            ${price}
            <span>{priceTitle}</span>
          </p>
        </div>
      </div>
      <div className='banner-image'>{/* <img src={illustration} alt='plane with clouds illustration' /> */}</div>
      <div className='banner-action'>
        <a href={href} className='btn btn--primary'>
          Book now
        </a>
      </div>
    </div>
  );
};

export default AdBanner;
