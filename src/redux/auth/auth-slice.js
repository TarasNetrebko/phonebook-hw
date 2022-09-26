import { createSlice } from '@reduxjs/toolkit';
import {
  userSignup,
  userLogin,
  userLogout,
  userCurrent,
} from './auth-operations';

const initialState = {
  user: {},
  isLogin: false,
  token: '',
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [userSignup.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [userSignup.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
      state.error = null;
    },
    [userSignup.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [userLogin.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
      state.error = null;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [userLogout.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [userLogout.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = {};
      state.token = '';
      state.isLogin = false;
      state.error = null;
    },
    [userLogout.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [userCurrent.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [userCurrent.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.isLogin = true;
      state.error = null;
    },
    [userCurrent.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
