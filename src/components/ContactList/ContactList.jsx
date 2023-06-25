import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removeContact } from 'redux/contactSlice';

export function ContactList() {
  const filterState = useSelector(state => state.filters);
  const contacts = useSelector(state => state.contacts);

  const normalizedFilter = filterState.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const dispatch = useDispatch();
  const handleClick = e => {
    dispatch(removeContact(e.currentTarget.id));
  };
  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li className={css.contactItem} key={id}>
            <p className={css.contactName}>
              {name}: {number}
            </p>
            <button className={css.btnDelete} id={id} onClick={handleClick}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
