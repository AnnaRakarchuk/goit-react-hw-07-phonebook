import React from 'react';
import css from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getFilter);
  const handleDeleteButton = contactId => {
    dispatch(deleteContact(contactId));
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
  );
  return (
    <ul className={css.delete__list}>
      {filteredContacts.map(contact => (
        <li className={css.delete__item} key={contact.id}>
          <span className={css.delete__userName}>
            {contact.name} : {contact.number}
          </span>

          <>
            <button
              className={css.delete__btn}
              type="button"
              onClick={() => handleDeleteButton(contact.id)}
            >Delete</button>
          </>
        </li>
      ))}
    </ul>
  );
};

