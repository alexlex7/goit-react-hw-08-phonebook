import { useState, useEffect } from 'react';
import { Button, Modal, Form, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from 'redux/contacts/contacts-operations';

export default function EditContactForm({
  show,
  toggleModal,
  name,
  number,
  id,
}) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ name, number });

  const handleChange = e => {
    setFormData(state => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    dispatch(contactsOperations.editContact({ ...formData, id }));
    toggleModal();
  };

  return (
    <>
      <Modal show={show} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={formData.name}
                type="text"
                name="name"
                placeholder="Enter new name"
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Number</Form.Label>
              <Form.Control
                value={formData.number}
                type="tel"
                name="number"
                placeholder="Enter new number"
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
