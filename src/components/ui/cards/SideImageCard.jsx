import React from 'react';
import './cards.css';

const SideImageCard = ({ image, tag, title, subTitle = '', coupon, link = '#' }) => {
  return (
    <div className='side-image-card flex'>
      <div className='left'>
        <img className='card-image' src={image} alt='img' />
        <img className='card-image-shadow' src={image} alt='img' />
      </div>
      <div className='right'>
        <div className='card-body flex flex--column'>
          <div className='body-header flex flex--column'>
            <p className='header-tag'>{tag}</p>
            <h3 className='header-title'>{title}</h3>
            <p className='header-sub-title'> {subTitle}</p>
          </div>
          <div className='body-footer flex'>
            <p className='footer-content'>
              Coupon:<span>{coupon}</span>
            </p>
            <a href={link} className='btn btn--red'>
              book now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideImageCard;
