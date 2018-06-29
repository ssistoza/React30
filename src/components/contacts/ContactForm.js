import React from 'react';
import base from '../../base';

class ContactForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    adjective: '',
    description: '',
    adjectives: [],
  };

  /**
   * Lifecycle Method:
   * - Keeps the adjectives state updated.
   */
  componentDidMount() {
    base.bindCollection('Ohana-metadata/categories/adjectives', {
      context: this,
      state: 'adjectives',
      query: ref => ref.orderBy('name', 'asc'),
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      username,
      adjective,
      description,
    } = this.state;

    this.props.addNewContact(
      firstName,
      lastName,
      username,
      adjective,
      description
    );
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
          <div className="two fields">
            <div className="field">
              <label htmlFor="Adjective">Pick an Adjective</label>
              <select
                className="ui dropdown"
                value={this.state.adjective}
                onChange={e => this.setState({ adjective: e.target.value })}
              >
                {this.state.adjectives.map(i => (
                  <option key={i.name}>{i.name}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="description">Describe yourself</label>
              <div className="ui input">
                <input
                  type="text"
                  placeholder="Laziliy doing homework"
                  value={this.state.description}
                  onChange={e => this.setState({ description: e.target.value })}
                />
              </div>
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
