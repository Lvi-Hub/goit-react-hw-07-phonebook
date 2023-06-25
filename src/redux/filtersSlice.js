import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterSet(state, action) {
      return action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterSet } = filterSlice.actions;
