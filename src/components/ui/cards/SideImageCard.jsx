import React from 'react';
import './cards.css';

const SideImageCard = () => {
  return (
    <div className='side-image-card flex'>
      <div className='left'>
        <img src='https://picsum.photos/200/300' alt='img' />
      </div>
      <div className='right'>
        <div className='card-body flex flex--column'>
          <div className='body-header flex flex--column'>
            <p className='header-tag'>Citytuch</p>
            <h3 className='header-title'>Up to $599 discount</h3>
            <p className='header-sub-title'>Domestic flight</p>
          </div>
          <div className='body-footer flex'>
            <p className='footer-content'>
              Cupon:<span>dhshjab09d</span>
            </p>
            <button className='btn btn--red'>book now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideImageCard;
