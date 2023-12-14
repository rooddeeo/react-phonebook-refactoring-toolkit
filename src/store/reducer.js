import { contactsReducer } from './contacts/contactsSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
  blacklist: [''],
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const reducer = {
  contacts: persistedReducer,
};
