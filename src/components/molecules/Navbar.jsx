import React from 'react';
import NavbarTitle from './../atoms/NavbarTitle';
import Clock from 'react-live-clock';

const Navbar = () => {
  return (
    <header className="navbar">
      <NavbarTitle />
      <Clock className="navbar__clock" format={'HH:mm:ss'} ticking={true} />
    </header>
  );
};

export default Navbar;
