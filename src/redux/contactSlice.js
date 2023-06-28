import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'redux/contactOperation';

export function handlePending(state) {
  state.isLoading = true;
  state.error = null;
  console.log(state.isLoading);
}
export function handleRejected(state, { payload }) {
  console.log('handleRejected');
  state.isLoading = true;
  state.error = payload;
}
export function handleFetchContact(state, { payload }) {
  console.log('handleFetchContact');
  state.isLoading = false;
  state.items = payload;
}

export function handleAddContact(state, { payload }) {
  console.log('handleAddContact');
  state.isLoading = false;
  state.items.push(payload);
}
export function handleDeleteContact(state, { payload }) {
  console.log('handleDeleteContact');
  state.isLoading = false;
  state.items = state.items.filter(contact => contact.id !== payload.id);
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContact)
      .addCase(addContact.fulfilled, handleAddContact)
      .addCase(deleteContact.fulfilled, handleDeleteContact)
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const contactReducer = contactSlice.reducer;
