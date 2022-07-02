import React, { useState } from 'react';
import bPartner from '../../images/test-data/become-partner.svg';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const navItems = [
  { name: 'Home', link: '/' },
  { name: 'wallet', link: '/wallet' },
  { name: 'Booking', link: '/booking' },
  { name: 'Business', link: '/business' },
  { name: 'Explore', link: '/explore' },
  { name: 'Support', link: '/support' },
];

const InlineMenu = () => {
  return (
    <div className="item-inline-menu">
      <ul className="item-inline-menu-list">
        {settings.map((item, index) => {
          return (
            <li key={index} className="item-inline-menu-item">
              <Link className="item-inline-menu-link" to={item}>
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Nav = () => {
  const [isOpenSettings, setOpenSettings] = useState(false);
  const variants = {
    open: { opacity: 1, transform: 'scaleY(1)' },
    closed: { opacity: 0, transform: 'ScaleY(0)' },
  };

  return (
    <div className="header-nav-container flex">
      <div className="header-logo">
        <img src={logo} alt="branding logo" />
      </div>
      <div className="header-nav">
        <ul className="header-nav-list">
          {navItems.map((item, index) => {
            return (
              <li key={index} className="header-nav-item">
                <Link className="header-nav-link" to={item.link}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="header-actions">
        <div className="header-item flex">
          <div className="item-image">
            <img src={bPartner} alt="" />
          </div>
          <div className="item-title">
            <p>Become a Partner</p>
          </div>
          <div className="item-icon">
            <i className="ri-arrow-down-s-line" />
          </div>
        </div>
        <div className="user-profile flex flex--column">
          <div
            onClick={() => {
              setOpenSettings(!isOpenSettings);
            }}
            className="header-item flex"
          >
            <div className="item-image">
              <img src="https://picsum.photos/200/300.webp" alt="user image" />
            </div>
            <div className="item-title">
              <p>Mohammed Salah</p>
            </div>
            <div className="item-icon">
              <i className="ri-arrow-down-s-line" />
            </div>
          </div>
          <motion.div
            className="item-list"
            animate={isOpenSettings ? 'open' : 'closed'}
            variants={variants}
            transition={{ ease: 'easeOut', duration: 0.3 }}
          >
            {<InlineMenu />}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
