import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  const { isLoggedIn } = useSelector(state => state.auth);

  return (
    <Navbar sticky="top" className="bg-secondary bg-gradient" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            <i className="bi bi-house-door-fill"></i>
            <span> Home</span>
          </Nav.Link>
          {isLoggedIn && (
            <Nav.Link as={NavLink} to="/contacts">
              <i className="bi bi-person-lines-fill"></i>
              <span> Contacts</span>
            </Nav.Link>
          )}
        </Nav>

        {!isLoggedIn ? (
          <>
            <Nav>
              <Nav.Link as={NavLink} to="/login">
                <i className="bi bi-box-arrow-in-right"></i>
                <span> Log in</span>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/register">
                <i className="bi bi-person-badge-fill"></i>
                <span> Register</span>
              </Nav.Link>
            </Nav>
          </>
        ) : (
          <UserMenu />
        )}
      </Container>
    </Navbar>
  );
}
