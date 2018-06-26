import React from 'react';

class ContactCard extends React.Component {
  render() {
    return (
      <div className="ui card">
        <div className="image">
          <img src="" alt="" />
        </div>
        <div className="content">
          <a href="" className="header" />
          <div className="meta">
            <span className="date" />
          </div>
          <div className="description">lorem</div>
        </div>
        <div className="extra content">
          <a href="">
            <i className="user icon" />
            22 Friends
          </a>
        </div>
      </div>
    );
  }
} // ContactCard

export default ContactCard;
