import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/base/Input.styled';
import Button from 'components/base/Button.styled';

const Form = ({ onSubmit }) => {
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(contact);
    setContact({
      name: '',
      number: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <Input
          type="text"
          name="name"
          placeholder="Enter name"
          value={contact.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Phone number
        <Input
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={contact.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <Button type="submit">Add contact</Button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
