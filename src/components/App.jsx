import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export function App() {
  return (
    //
    <div className="app">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
