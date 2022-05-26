import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';

const initialState = {
  items: [],
  isLoading: false,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    resetContacts(state) {
      state.items = [];
    },
  },
  extraReducers: {
    [contactsOperations.fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [contactsOperations.fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [contactsOperations.fetchContacts.rejected]: state => {
      state.isLoading = false;
    },

    [contactsOperations.addContacts.fulfilled]: (state, action) => {
      state.items.push(action.payload);
    },
    [contactsOperations.deleteContacts.fulfilled]: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    [contactsOperations.editContact.fulfilled]: (state, { payload }) => {
      state.items = state.items.map(item =>
        item.id !== payload.id ? item : payload
      );
    },
  },
});

export const { resetContacts } = contactsSlice.actions;
