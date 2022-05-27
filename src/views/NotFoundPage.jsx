import React from 'react';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

export default function NotFoundPage() {
  let location = useLocation();
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{
        height: `calc(100vh - 56px)`,
      }}
    >
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </Container>
  );
}
