import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async credential => {
    try {
      const { data } = await axios.post('/contacts', credential);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const deleteContacts = createAsyncThunk('contacts/deleteContacts', async id => {
  try {
    await axios.delete(`/contacts/${id}`);

    return id;
  } catch (error) {
    console.log(error);
  }
});

const editContact = createAsyncThunk(
  'constacts/editContact',
  async ({ id, name, number }) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { name, number });
      return data;
    } catch (error) {}
  }
);

const contactsOperations = {
  fetchContacts,
  addContacts,
  deleteContacts,
  editContact,
};

export default contactsOperations;
