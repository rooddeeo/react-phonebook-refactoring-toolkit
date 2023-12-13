import { addContactAction } from 'store/contacts/contactsSlice.js';
import Contacts from '../Contacts/Contacts.jsx';
import css from './ContactList.module.css';
import ContactForm from 'components/ContactForm/ContactForm.jsx';
import { useDispatch, useSelector } from 'react-redux';
import Filter from 'components/Filter/Filter.jsx';

const ContactList = () => {
  const { contacts, filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const addContact = contacts => {
    dispatch(addContactAction(contacts));
  };

  const lowerCase = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowerCase)
  );
  console.log(visibleContacts);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter />
      <ul className={css.contactList}>
        {contacts.map(contact => (
          <Contacts key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
};
export default ContactList;
