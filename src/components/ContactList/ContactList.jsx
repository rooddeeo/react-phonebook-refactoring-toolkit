import Filter from 'components/Filter/Filter.jsx';
import Contacts from '../Contacts/Contacts.jsx';
import css from './ContactList.module.css';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm.jsx';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [communications, setСommunications] = useState([]);

  const addContact = newContact => {
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    console.log(isExist);
    if (isExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    setContacts(prev => {
      return [...prev, { ...newContact, id: nanoid() }];
    });
  };

  const deleteContact = id => {
    setСommunications(prev => {
      return prev.filter(contact => contact.id !== id);
    });
  };

  useEffect(() => {
    const contactsBase = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsBase) || [];
    setСommunications(parsedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(communications));
  }, [communications]);

  console.log(communications);
  return (
    <>
      <ul className={css.contactList}>
        {communications.map(contact => (
          <Contacts
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
      <ContactForm addContact={addContact} />
      <Filter communications={communications} />
    </>
  );
};
export default ContactList;
