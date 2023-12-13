import ContactList from './ContactList/ContactList.jsx';
import { Provider } from 'react-redux';
import { store } from 'store/store.js';

const App = () => {
  return (
    <Provider store={store}>
      <ContactList />
    </Provider>
  );
};

export default App;
