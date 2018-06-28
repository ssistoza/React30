import React from 'react';

class ContactForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    birthday: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { firstName, lastName, username, birthday } = this.state;
    this.props.addNewContact(firstName, lastName, username, birthday);
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <h4 className="ui header">Be apart of our &#699;Ohana.</h4>

        <div className="field">
          <label htmlFor="Name">Name</label>
          <div className="two fields">
            <div className="field">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={e => this.setState({ firstName: e.target.value })}
              />
            </div>
            <div className="field">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={e => this.setState({ lastName: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className="field">
          <label htmlFor="username">Username</label>
          <div className="field">
            <div className="ui input">
              <input
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={e => this.setState({ username: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className="field">
          <label htmlFor="Birthday">Birth Year</label>
          <div className="field">
            <div className="ui input">
              <input
                type="month"
                placeholder="day"
                value={this.state.birthday}
                onChange={e => this.setState({ birthday: e.target.value })}
              />
            </div>
          </div>
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    );
  }
} // ContactForm

export default ContactForm;
