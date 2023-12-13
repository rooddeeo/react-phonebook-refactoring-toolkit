import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContactAction: {
      prepare: contacts => {
        return { payload: { ...contacts, id: nanoid() } };
      },
      reducer: (state, action) => {
        return { ...state, contacts: [...state.contacts, action.payload] };
      },
    },
    deleteContactAction: (state, action) => {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
    filterContactAction: (state, action) => {
      return {
        ...state,
        contacts: state.contacts.filter(contact =>
          contact.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    },
  },
});

export const { addContactAction, deleteContactAction, filterContactAction } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
