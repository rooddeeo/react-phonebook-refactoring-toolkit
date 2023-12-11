import React, { useState } from 'react';
import css from './Filter.module.css';
import ContactList from 'components/ContactList/ContactList';

const Filter = ({ communications }) => {
  const [filter, setFilter] = useState('');

  const changeFilter = event => {
    setFilter(event.target.value);
  };
  const lowerCase = filter.toLowerCase();
  const visibleСommunications = communications.filter(contact =>
    contact.name.toLowerCase().includes(lowerCase)
  );
  console.log(communications);
  return (
    <div>
      <input
        className={css.inputFilter}
        type="text"
        name="name"
        value={filter}
        onChange={changeFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      {/* <ContactList communications={visibleCommunications} /> */}
    </div>
  );
};

export default Filter;
