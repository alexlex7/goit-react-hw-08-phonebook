import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

export default function ContactsPage() {
  const [filter, setFilter] = useState('');
  const handleChange = e => {
    setFilter(e.target.value);
  };
  return (
    <>
      <Container
        className="d-flex flex-column align-items-center mt-1"
        style={{
          minHeight: `calc(100vh - 56px)`,
        }}
      >
        <h2>Phonebook</h2>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={handleChange} />
        <ContactsList filter={filter} />
      </Container>
    </>
  );
}
