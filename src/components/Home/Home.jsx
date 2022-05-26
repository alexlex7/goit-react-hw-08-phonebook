import s from './Home.module.css';

import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Home() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <Container className={s.homeWrapper}>
      <h1 className={s.title}>Phone book</h1>

      {isLoggedIn ? (
        <p>
          go to the contacts <NavLink to="/contacts">page </NavLink>
        </p>
      ) : (
        <p>
          Please <NavLink to="/login">log in</NavLink> or{' '}
          <NavLink to="/register">register</NavLink>
        </p>
      )}
    </Container>
  );
}
