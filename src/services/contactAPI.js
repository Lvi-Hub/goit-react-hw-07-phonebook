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
