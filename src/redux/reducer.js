import { contactReducer } from './contactSlice';
import { filterReducer } from './filtersSlice';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
  contacts: contactReducer,
  filters: filterReducer,
});
