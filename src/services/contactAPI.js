import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64988d159543ce0f49e225fe.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contactss/fetchAll',
  async () => {
    const response = await axios.get('/contacts');
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ createdAt, name, phone, id }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', {
        createdAt,
        name,
        phone,
        id,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
