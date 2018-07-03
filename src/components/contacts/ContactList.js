import React from 'react';
import PropTypes from 'prop-types';
import ContactCard from './ContactCard';

const ContactList = props => {
  const CONTACTS = props.contacts.map(contact => (
    <ContactCard key={contact.id} contact={contact} />
  ));

  return <div className="ui centered cards">{CONTACTS}</div>;
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      adjective: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default ContactList;
