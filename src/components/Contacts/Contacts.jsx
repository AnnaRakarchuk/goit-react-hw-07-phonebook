import React from 'react';
import css from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getIsLoading, getFilterContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilterContacts);
  const isLoading = useSelector(getIsLoading);
  useSelector(getFilterContacts);

  const handleDeleteButton = contactId => {
    dispatch(deleteContact(contactId));
  };

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div>
    {isLoading ? <div>Loading...</div> :
    <ul className={css.delete__list}>
    {contacts.map(contact => (
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
  </ul>}
  </div>
  );
};

