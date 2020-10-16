import React from 'react';
import Container from '../Container/Container';
import Nav from './Nav/Nav';
import { header } from './Header.module.css';

const Header = () => {
  return (
    <header>
      <Container>
        <Nav />
      </Container>
    </header>
  );
};

export default Header;
