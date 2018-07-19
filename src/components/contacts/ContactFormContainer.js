import React from 'react';
import base from '../../base';
import ContactForm from './ContactForm';
import NewContactAlert from './NewContactAlert';

class ContactFormContainer extends React.Component {
  state = {
    contacts: [],
    adjectives: [],
    isTaken: false,
    isAMember: false,
    isSuccessful: false,
    isNotComplete: false,
  };

  componentDidMount() {
    base.bindCollection('Ohana', {
      context: this,
      state: 'contacts',
      withRefs: true,
      query: ref => ref.orderBy('id', 'desc'),
    });

    base.bindCollection('Ohana-metadata/categories/adjectives', {
      context: this,
      state: 'adjectives',
      query: ref => ref.orderBy('name', 'asc'),
    });
  }

  resetState = () => {
    this.setState({
      isTaken: false,
      isAMember: false,
      isSuccessful: false,
      isNotComplete: false,
    });
  };

  addNewContact = (firstName, lastName, username, adjective, description) => {
    const contactsRef = this.state.contacts;

    this.resetState();

    const isAMember = contactsRef.filter(
      item => firstName === item.firstName && lastName === item.lastName
    );

    const isTaken = contactsRef.filter(item => username === item.username);

    const isNotComplete =
      firstName === '' ||
      lastName === '' ||
      username === '' ||
      adjective === '' ||
      description === '';

    if (isAMember.length > 0) this.setState({ isAMember: true });
    else if (isTaken.length > 0) this.setState({ isTaken: true });
    else if (isNotComplete === true) this.setState({ isNotComplete: true });
    else {
      base.addToCollection('Ohana', {
        id: contactsRef.length + 1,
        first_name: firstName,
        last_name: lastName,
        username,
        adjective,
        description,
      });
      this.setState({ isSuccessful: true });
    }
  };

  render() {
    return (
      <div className="main ui text container">
        <h1 className="ui dividing centered header">Join Now.</h1>
        <div id="content">
          <ContactForm addNewContact={this.addNewContact} />
          <NewContactAlert
            isTaken={this.state.isTaken}
            partOfOhana={this.state.isAMember}
            isSuccessful={this.state.isSuccessful}
            isNotComplete={this.state.isNotComplete}
          />
        </div>
      </div>
    );
  }
} // ContactFormContainer

export default ContactFormContainer;
