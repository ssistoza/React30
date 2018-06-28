import React from 'react';

import { DATA } from '../contacts/data';

import ContactForm from '../contacts/ContactForm';
import NewContactAlert from '../contacts/NewContactAlert';

class NewContact extends React.Component {
  state = {
    isTaken: false,
    isAMember: false,
    isSuccessful: false,
    isNotComplete: false,
  };

  addNewContact = (firstName, lastName, username, birthday) => {
    // First reset all states.
    this.setState({
      isTaken: false,
      isAMember: false,
      isSuccessful: false,
      isNotComplete: false,
    });

    // Map through array.
    DATA.map(item => {
      if (firstName === item.firstName && lastName === item.lastName) {
        this.setState({ isAMember: true });
      } else if (username === item.username) {
        this.setState({ isTaken: true });
      } else if (
        firstName === '' ||
        lastName === '' ||
        username === '' ||
        birthday === ''
      ) {
        this.setState({ isNotComplete: true });
      } else {
        this.setState({ isSuccessful: true });
      }
    });
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
} // NewContact

export default NewContact;
