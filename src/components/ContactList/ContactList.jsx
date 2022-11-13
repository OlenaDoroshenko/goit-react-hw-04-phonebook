import PropTypes from 'prop-types';

import Button from 'components/base/Button.styled';
import ContactItem from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name}: {number}
          <Button type="button" onClick={() => onDelete(id)}>
            Delete
          </Button>
        </ContactItem>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
