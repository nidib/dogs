import React from 'react';
import Logo from '../Header/Nav/Logo';
import { footer, copy } from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={footer}>
      <Logo />
      <p className={copy}>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
