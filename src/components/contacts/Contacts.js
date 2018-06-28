import React from 'react';
import ContactCard from './ContactCard';
import { DATA } from './data';

class Contacts extends React.Component {
  render() {
    const CONTACTS = DATA.map(item => (
      <ContactCard key={item.id} item={item} />
    ));

    return <div className="ui centered cards">{CONTACTS}</div>;
  }
} // Contacts

export default Contacts;
