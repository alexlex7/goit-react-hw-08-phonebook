import { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operation';
import s from './RegistrationForm.module.css';

const initialState = {
  name: '',
  email: '',
  password: '',
};

// {
//   "name": "Adrian Cross",
//   "email": "across@mail.com",
//   "password": "examplepassword"
// }

export default function RegistrationForm() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register(formData));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <Container className={s.registerFormWrapper}>
      <Form
        className={`mx-auto bg-body rounded p-4  ${s.registerForm}`}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={formData.name}
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={formData.email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
          <span> Register</span>
        </Button>
      </Form>
    </Container>
  );
}
