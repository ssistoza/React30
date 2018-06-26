import React from 'react';

class Form extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.refs.name.value);
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input placeholder="Name" ref="name" />
        </div>

        <input className="ui button" type="submit" />
      </form>
    );
  }
} // Form

export default Form;
