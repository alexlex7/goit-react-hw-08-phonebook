import { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operation';
import s from './LoginForm.module.css';

const initialState = {
  email: '',
  password: '',
};

export default function LoginForm() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.login(formData));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };
  // "vh-100 d-flex align-items-center"
  return (
    <Container className={s.loginFormWrapper}>
      <Form
        className={`mx-auto bg-body rounded p-4 p-sm-3 ${s.loginForm}`}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={formData.email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={formData.password}
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button
          style={{ width: '105px' }}
          className="mx-auto d-block"
          variant="primary"
          type="submit"
        >
          <i className="bi bi-box-arrow-in-right"></i>
          <span> Log in</span>
        </Button>
      </Form>
    </Container>
  );
}
