import React from 'react';

const SideImageCard = ({ sideImage, sideImageAlt = '' }) => {
  return (
    <div className='side-image-card'>
      <div className='left'>
        <img src={sideImage} alt={sideImageAlt} />
      </div>
      <div className='right'>
        <div className='card-body'>
          <div className='body-header'>
            <div className='header-tag'>{tag}</div>
            <div className='header-content'>{content}</div>
          </div>
          <div className='body-footer'>
            <div className='footer-content'>
              {footer - title}:<span>{footerContent}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideImageCard;
