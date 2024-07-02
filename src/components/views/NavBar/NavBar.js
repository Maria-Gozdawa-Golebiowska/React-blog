import React from 'react';
import { Navbar, Container, Nav, NavbarBrand, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <section>
      <Navbar bg='primary' variant='dark' expand='lg' className='mt-4 mb-4 rounded'>
        <Container className={styles.nav}>
          <NavbarBrand as={NavLink} to="/">Blog.app</NavbarBrand>
          <Nav className={styles['nav-links']}>
            <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </section>
  );
};

export default NavBar;
