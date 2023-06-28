import { ContactForm } from 'components/ContactForm/ContactForm';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { fetchContacts } from 'services/contactAPI';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="app">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
