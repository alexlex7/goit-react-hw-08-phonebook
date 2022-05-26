import React from 'react';
import { Button, Navbar, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operation';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user.email);
  return (
    <>
      <Navbar.Collapse className="justify-content-end">
        <Stack direction="horizontal" gap="3">
          <Navbar.Text>
            <i className="bi bi-envelope-check-fill"></i>
            <span> {email}</span>
          </Navbar.Text>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(authOperations.logOut());
            }}
          >
            <i className="bi bi-box-arrow-right"></i>
            <span> Log out</span>
          </Button>
        </Stack>
      </Navbar.Collapse>
    </>
  );
}
