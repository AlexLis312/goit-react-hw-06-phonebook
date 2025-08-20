import React from 'react';
import './App.css';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { addNumber, removeNumber, setFilter } from '../store/phonebookSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const handleAdd = ({ name, number }) => {
    dispatch(addNumber({ name, number }));
  };

  const handleRemove = id => {
    dispatch(removeNumber(id));
  };

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="app-container">
      <div className="section">
        <ContactForm onSubmit={handleAdd} />
      </div>
      <div className="section">
        <Filter filter={filter} onFilterChange={handleFilterChange} />
      </div>
      <div className="section">
        <ContactList contacts={visibleContacts} handleRemove={handleRemove} />
      </div>
    </div>
  );
};
