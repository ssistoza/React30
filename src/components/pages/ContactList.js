import React from 'react';
import Contacts from '../contacts/Contacts';

class ContactList extends React.Component {
  render() {
    return (
      <div className="main ui container">
        <h1 className="ui dividing centered text header">Our &#699;Ohana</h1>
        <div id="content">
          <Contacts />
        </div>
      </div>
    );
  }
} // ContactList

export default ContactList;
