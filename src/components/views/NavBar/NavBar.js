import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import styles from './NavBar.module.scss'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <section>
            <Navbar bg='primary' variant='dark' expand='lg' className='mt-4 mb-4 rounded'>
                <Container className={styles.nav}>
                    <NavbarBrand as={NavLink} to="/">NavBar</NavbarBrand>
                    <Nav className='me-auto'>
                        <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                        <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </section>
    )
}
export default NavBar;