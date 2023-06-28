import React from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'services/contactAPI';
import { getContacts } from 'redux/selector';

export function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const submitName = e.target.elements.name.value;
    const submitNumber = e.target.elements.number.value;

    const checkContacts = contacts.map(el => el.name.toLowerCase());
    console.log(checkContacts);

    if (checkContacts.includes(submitName.toLowerCase())) {
      alert('The contact has already existed');
      return;
    } else {
      dispatch(
        addContact({
          name: submitName.toString(),
          number: submitNumber.toString(),
          id: nanoid(),
        }),
        e.target.reset()
      );
    }
  };

  return (
    <form className={css.submitForm} onSubmit={handleSubmit}>
      <label className={css.labelName}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.labelNumber}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.submitBtn} type="submit" onSubmit={handleSubmit}>
        Add contact
      </button>
    </form>
  );
}
