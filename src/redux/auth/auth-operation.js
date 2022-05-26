import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { resetContacts } from 'redux/contacts/contactsSlice';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

const logOut = createAsyncThunk('auth/logout', async (_, { dispatch }) => {
  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(resetContacts());
  } catch (error) {
    console.log(error.message);
  }
});

const getCurrentUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, { getState, rejectWithValue }) => {
    const { auth } = getState();
    if (!auth.token) return rejectWithValue();
    token.set(auth.token);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {}
  }
);

const authOperations = {
  register,
  login,
  logOut,
  getCurrentUser,
};

export default authOperations;
