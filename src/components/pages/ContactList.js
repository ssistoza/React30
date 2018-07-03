import React from 'react';
import ContactList from '../contacts/ContactList';
import base from '../../base';

class ContactList extends React.Component {
  state = {
    contacts: [],
  };

  /**
   * Allow us to keep state in sync.
   */
  componentDidMount() {
    base.bindCollection('Ohana', {
      context: this,
      state: 'contacts',
      withRefs: true,
    });
  }

  render() {
    return (
      <div className="main ui container">
        <h1 className="ui dividing centered text header">Our &#699;Ohana</h1>
        <div id="content">
          <ContactList contacts={this.state.contacts} />
        </div>
      </div>
    );
  }
} // ContactList

export default ContactList;
