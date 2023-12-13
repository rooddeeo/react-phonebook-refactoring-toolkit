import ContactList from './ContactList/ContactList.jsx';
import { Provider } from 'react-redux';
import { store } from 'store/store.js';
import ContactForm from './ContactForm/ContactForm.jsx';
import Filter from './Filter/Filter.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Provider>
  );
};

export default App;
