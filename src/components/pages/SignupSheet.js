import React from 'react';
import Form from '../sign-up sheet/Form';
import List from '../sign-up sheet/List';

class SignupSheet extends React.Component {
  state = {
    items: [],
  };

  handleFormSubmit = dataSubmitted => {
    const newItems = [...this.state.items, dataSubmitted];
    this.setState({ items: newItems });
  };

  render() {
    return (
      <div className="main ui text container">
        <h1 className="ui dividing centered header">Sign Up Form</h1>
        <div id="content">
          <Form onFormSubmit={this.handleFormSubmit} />
          <List items={this.state.items} />
        </div>
      </div>
    );
  }
} // SignupSheet

export default SignupSheet;
