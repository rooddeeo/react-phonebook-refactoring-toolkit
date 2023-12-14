import ContactList from './ContactList/ContactList.jsx';
import { Provider } from 'react-redux';
import { store, persistor } from 'store/store.js';
import ContactForm from './ContactForm/ContactForm.jsx';
import Filter from './Filter/Filter.jsx';
import css from './App.module.css';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className={css.container}>
          <div className={css.content}>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm />
            <h2 className={css.subTitle}>Search for contact</h2>
            <Filter />
            <ContactList />
          </div>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
