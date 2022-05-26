import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { deleteContactsById } from 'redux/contacts/contactsOperations';
import { Button, ListGroupItem, Spinner } from 'react-bootstrap';
import { useState } from 'react';
import contactsOperations from '../../redux/contacts/contacts-operations';
import EditContactForm from 'components/EditContactForm/EditContactForm';

function ContactsListElement({ name, number, id }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);

  const toggleModal = () => setShow(!show);

  return (
    <>
      <ListGroupItem className="d-flex p-2 justify-content-between align-items-center bg-light">
        <p className="m-0">
          {name}: {number}
        </p>
        <div>
          <Button
            variant="outline-danger"
            className="me-2"
            size="sm"
            style={{ width: '35px' }}
            onClick={toggleModal}
          >
            <i className="bi bi-pencil-square"></i>
          </Button>
          <Button
            style={{ width: '35px' }}
            variant="outline-primary"
            size="sm"
            type="button"
            onClick={() => {
              dispatch(contactsOperations.deleteContacts(id));
              setIsLoading(true);
            }}
          >
            {isLoading ? (
              <Spinner
                as="span"
                animation="border"
                role="status"
                variant="danger"
                aria-hidden="true"
                size="sm"
              />
            ) : (
              <i className="bi bi-trash"></i>
            )}
          </Button>
        </div>
      </ListGroupItem>
      <EditContactForm
        show={show}
        toggleModal={toggleModal}
        name={name}
        number={number}
        id={id}
      />
    </>
  );
}

export default ContactsListElement;

ContactsListElement.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
