import authOperation from './auth-operation';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperation.register.pending]: state => {
      state.error = null;
    },
    [authOperation.register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperation.register.rejected]: (state, action) => {
      state.error = !action.payload.message
        ? 'User registration failed'
        : action.payload.message;
    },
    [authOperation.login.pending]: state => {
      state.error = null;
    },
    [authOperation.login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperation.login.rejected]: (state, action) => {
      state.error = !action.payload.message
        ? 'Authorization failed. Please check you email and password.'
        : action.payload.message;
    },
    [authOperation.logOut.fulfilled]: state => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = false;
    },
    [authOperation.getCurrentUser.pending]: state => {
      state.isRefreshing = true;
    },
    [authOperation.getCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [authOperation.getCurrentUser.rejected]: state => {
      state.isRefreshing = false;
    },
  },
});
