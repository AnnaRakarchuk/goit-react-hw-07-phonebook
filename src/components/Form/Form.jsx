import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './Form.module.css';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import toast, { Toaster } from 'react-hot-toast';

export const Form = () =>{
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const ValueHandler = e => {
    const { name, value } = e.target;
    switch(name) {
case 'name':
  setName(value);
  break;
  case 'number':
    setNumber(value);
    break;
    default:
      throw new Error('There has been a mistake. Try again, please.');
    }
};

const onSubmitBtn = e => {
  e.preventDefault();
  const checkName = contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );

  if (checkName) {
    toast.error(`${name} is already in your contacts.`);

    return;
  } else {
    dispatch(addContact(name, number));
  }

  setName('');
  setNumber('');
};

    return (
      <form className={css.form} onSubmit={onSubmitBtn}>
        <label className={css.form__label}>
          Name
          <input
            className={css.form__input}
            placeholder="Name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={ValueHandler}
          />
        </label>
        <label className={css.form__label}>
          Number
          <input
            className={css.form__input}
            placeholder="Phone number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={ValueHandler}
          />
        </label>
        <button className={css.form__button} type="submit">
          Add contact
        </button>
        <Toaster />
      </form>
    );
}

