import React from 'react';

class ContactCard extends React.Component {
  render() {
    const {
      first_name,
      last_name,
      username,
      description,
      adjective,
    } = this.props.item;
    return (
      <div className="card">
        <div className="image">
          <img src={`https://api.adorable.io/avatars/150/${username}`} alt="" />
        </div>
        <div className="content">
          <div className="header">{`${first_name} ${last_name}`}</div>
          <div className="meta">
            <span>{adjective}</span>
          </div>
          <div className="description">{description}</div>
        </div>
      </div>
    );
  }
} // ContactCard

export default ContactCard;
