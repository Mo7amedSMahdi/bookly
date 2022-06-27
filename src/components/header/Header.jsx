import React from 'react';
import Nav from './Nav';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <span className="header-overlay" />
      <span className="plane-overlay" />
      <div className="header-container">
        <Nav />
      </div>
    </div>
  );
};

export default Header;
