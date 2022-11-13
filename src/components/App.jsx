import React, { useEffect, useState } from 'react';
import GlobalStyle from './GlobalStyle';
import { nanoid } from 'nanoid';

import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const Phonebook = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));

    const filterContacts = () => {
      const normalizedFilter = filter.toLowerCase();
      const filtered = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
      setFilteredContacts(filtered);
    };

    filterContacts();
  }, [contacts, filter]);

  const addContact = contactInfo => {
    const { name, number } = contactInfo;

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(p => [contact, ...p]);
  };

  const deleteContact = id => {
    setContacts(p => p.filter(contact => contact.id !== id));
  };

  const updateFilter = e => {
    setFilter(e.currentTarget.value);
  };

  return (
    <>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={updateFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </>
  );
};

export default Phonebook;
