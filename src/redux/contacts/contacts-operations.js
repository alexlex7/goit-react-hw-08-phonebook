import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (credential, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', credential);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);

      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const editContact = createAsyncThunk(
  'constacts/editContact',
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { name, number });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const contactsOperations = {
  fetchContacts,
  addContacts,
  deleteContacts,
  editContact,
};

export default contactsOperations;
