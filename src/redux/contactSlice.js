import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { addContact, deleteContact, fetchContacts } from 'services/contactAPI';

export function handlePending(state) {
  state.isLoading = true;
  state.error = null;
}
export function handleRejected(state, { payload }) {
  state.error = payload;
  state.isLoading = false;
}
export function handleContactFetch(state, { payload }) {
  state.isLoading = false;
  state.items = payload;
}

export function handleContactAdd(state, { payload }) {
  state.isLoading = false;
  state.items.push(payload);
}
export function handleDeleteContact(state, { payload }) {
  state.isLoading = false;
  state.items = state.items.filter(contact => contact.id !== payload.id);
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleContactFetch)
      .addCase(addContact.fulfilled, handleContactAdd)
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
