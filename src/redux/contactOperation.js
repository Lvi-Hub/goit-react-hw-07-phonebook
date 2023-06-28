import { createAsyncThunk } from '@reduxjs/toolkit/dist';
import * as contactAPI from 'services/contactAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/allContacts',
  (_, { rejectWithValue }) => {
    try {
      return contactAPI.fetchContactsAPI();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  (newContact, { rejectWithValue }) => {
    try {
      return contactAPI.addContactAPI(newContact);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  (id, { rejectWithValue }) => {
    try {
      return contactAPI.deleteContactAPI(id);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
