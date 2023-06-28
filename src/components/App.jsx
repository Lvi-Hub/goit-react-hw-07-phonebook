import { ContactForm } from 'components/ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { fetchContacts } from 'redux/contactOperation';
import { getError, getIsLoading } from 'redux/selector';

export function App() {
  const dispatch = useDispatch();
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="app">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {loading && <p>Loading...</p>}
      {error && <p>No feedback from server, try again, please</p>}
      <ContactList />
    </div>
  );
}
