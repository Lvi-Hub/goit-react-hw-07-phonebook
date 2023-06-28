import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { getContacts, getFilter } from 'redux/selector';
import { deleteContact } from 'redux/contactOperation';

export function ContactList() {
  const filterState = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const normalizedFilter = filterState.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const dispatch = useDispatch();
  const handleClick = e => {
    dispatch(deleteContact(e.currentTarget.id));
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
