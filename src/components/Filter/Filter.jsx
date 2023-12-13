import React, { useEffect, useState } from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContactAction } from 'store/contacts/contactsSlice';

const Filter = () => {
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterContactAction(filter));
  }, [filter, dispatch]);
  console.log(filter);
  const changeFilter = event => {
    const dataFilter = event.target.value;
    dispatch(filterContactAction(dataFilter));
    setFilter(event.target.value);
  };

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
    </div>
  );
};

export default Filter;
