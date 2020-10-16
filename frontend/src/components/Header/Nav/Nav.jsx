import React from 'react';
import Logo from './Logo';
import Login from './Login';
import { nav } from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={nav}>
      <Logo />
      <Login />
    </nav>
  );
};

export default Nav;
