import React from 'react';
import './list.css';

const ListItem = ({ image, title, price, date, link = '#' }) => {
  return (
    <div className='list-item flex'>
      <div className='item-details flex'>
        <div className='item-image'>
          <img src={image} alt='item' />
        </div>
        <div className='item-title'>
          <h2>{title}</h2>
        </div>
      </div>
      <div className='item-price'>
        <p>${price}</p>
      </div>
      <div className='item-date'>
        <p>{date}</p>
      </div>
      <div className='item-action'>
        <a href={link} className='btn btn--icon'>
          Book Now
          <i className='ri-arrow-right-s-fill' />
        </a>
      </div>
    </div>
  );
};

export default ListItem;
