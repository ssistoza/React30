import React from 'react';
import ContactList from './ContactList';
import base from '../../base';

class ContactListContainer extends React.Component {
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
        <div className="main ui text container"><h1 className="ui dividing centered header">Our &#699;Ohana</h1></div>
        <div id="content">
          <ContactList contacts={this.state.contacts} />
        </div>
      </div>
    );
  }
} // ContactListContainer

export default ContactListContainer;
