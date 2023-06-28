import axios from 'axios';

axios.defaults.baseURL = 'https://64988d159543ce0f49e225fe.mockapi.io/';

export const fetchContactsAPI = async () => {
  const { data } = await axios.get(`/contacts`);
  return data;
};

export const addContactAPI = async newContact => {
  const { data } = await axios.post(`/contacts`, newContact);
  return data;
};

export const deleteContactAPI = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};

// export const fetchContacts = createAsyncThunk(
//   'contactss/fetchAll',
//   async () => {
//     const response = await axios.get('/contacts');
//     return response.data;
//   }
// );

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async ({ createdAt, name, number, id }, thunkAPI) => {
//     try {
//       const response = await axios.post('/contacts', {
//         createdAt,
//         name,
//         number,
//         id,
//       });

//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${id}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
