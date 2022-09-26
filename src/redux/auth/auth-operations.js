import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, signup, logout, current } from '../../servises/api';

export const userSignup = createAsyncThunk(
  'user/signup',
  async (user, thunkApi) => {
    try {
      const data = await signup(user);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const userLogin = createAsyncThunk(
  'user/login',
  async (user, thunkApi) => {
    try {
      const data = await login(user);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const userLogout = createAsyncThunk(
  'user/logout',
  async (_, thunkApi) => {
    try {
      const data = await logout();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const userCurrent = createAsyncThunk(
  'user/current',
  async (_, thunkApi) => {
    try {
      const { auth } = thunkApi.getState();
      const data = await current(auth.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
