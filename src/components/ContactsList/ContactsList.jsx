import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from 'redux/contacts/contacts-operations';
import { ListGroup } from 'react-bootstrap';
import ContactsListElement from 'components/ContactListElement';
import Message from 'components/Message/Message';
import Loader from 'components/Loader/Loader';

export default function ContactsList({ filter }) {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const contacts = useSelector(state => state.contacts.items);
  const isLoading = useSelector(state => state.contacts.isLoading);

  useEffect(() => {
    if (token) dispatch(contactsOperations.fetchContacts());
  }, [dispatch, token]);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      {isLoading && contacts.length === 0 && <Loader />}

      {filteredContacts.length > 0 && !isLoading && (
        <ListGroup
          className="shadow p-3 bg-body rounded"
          style={{ width: '480px' }}
        >
          {filteredContacts.map(({ id, name, number }) => (
            <ContactsListElement key={id} name={name} number={number} id={id} />
          ))}
        </ListGroup>
      )}

      {contacts.length > 0 && filteredContacts.length === 0 && (
        <Message text="The entered name wasn't found." />
      )}

      {contacts.length === 0 && <Message text="Phone book has no contacts." />}
    </>
  );
}
