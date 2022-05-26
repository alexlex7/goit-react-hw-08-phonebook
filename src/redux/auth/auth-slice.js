import authOperation from './auth-operation';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperation.register.pending]: state => {
      state.isRefreshing = true;
    },
    [authOperation.register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [authOperation.register.rejected]: state => {
      state.isRefreshing = false;
    },
    [authOperation.login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
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
