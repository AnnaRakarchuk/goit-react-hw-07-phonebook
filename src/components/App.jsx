import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import css from './App/App.module.css';

export const App = () => {
    return(
      <div className={css.form__wrapper}>
        <h2 className={css.form__title}>Phonebook</h2>
        <Form />
        <h2 className={css.form__title}>Contacts</h2>
        <Filter />
        <Contacts />
      </div>
    )
};
