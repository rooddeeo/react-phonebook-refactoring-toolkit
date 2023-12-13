import React, { useEffect, useState } from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContactAction } from 'store/contacts/contactsSlice';

const Filter = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterContactAction(value));
  }, [value, dispatch]);

  const changeFilter = event => {
    const dataValue = event.target.value;
    setValue(dataValue);
  };
  console.log('value', value);

  return (
    <div>
      <input
        className={css.inputFilter}
        type="text"
        name="name"
        value={value}
        onChange={changeFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};

export default Filter;
