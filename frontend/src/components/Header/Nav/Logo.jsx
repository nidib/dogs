import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="Logo" style={{ width: 28, heigh: 22 }} />
    </Link>
  );
};

export default Logo;
