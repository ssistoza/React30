import React from 'react';
import ContactCard from './ContactCard';

class Contacts extends React.Component {
  render() {
    const CONTACTS = this.props.contacts.map(item => (
      <ContactCard key={item.id} item={item} />
    ));

    return <div className="ui centered cards">{CONTACTS}</div>;
  }
} // Contacts

export default Contacts;
