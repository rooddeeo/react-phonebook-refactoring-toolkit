import Contacts from '../Contacts/Contacts.jsx';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const { contacts, filter } = useSelector(state => state.contacts);

  const lowerCase = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowerCase)
  );
  console.log(visibleContacts);

  return (
    <>
      <ul className={css.contactList}>
        {contacts.map(contact => (
          <Contacts key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
};
export default ContactList;
