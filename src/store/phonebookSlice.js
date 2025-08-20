import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [],
  filter: '',
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addNumber(state, action) {
      const exists = state.contacts.some(
        contact =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      );

      if (!exists) {
        state.contacts.push({
          id: nanoid(),
          ...action.payload,
        });
      }
    },

    removeNumber(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },

    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addNumber, removeNumber, setFilter } = phonebookSlice.actions;
export default phonebookSlice.reducer;
