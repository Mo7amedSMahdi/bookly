import React from 'react';

const FormField = ({ headerTitle, footerTitle, icon, inputPlaceHolder, value = '' }) => {
  return (
    <div className='form-field flex flex--column'>
      <div className='field-header flex'>
        <i className={icon} />
        <p className='header-title'>{headerTitle}</p>
      </div>
      <div className='field-body flex'>
        <input type='text' value={value} placeholder={inputPlaceHolder} />
      </div>
      <div className='field-footer flex'>
        <p className='footer-title'>{footerTitle}</p>
      </div>
    </div>
  );
};

export default FormField;
