import React from 'react';
import PropTypes from 'prop-types';

/**
 * Display all information of a single contact.
 * - Stateless React Component.
 * - Fallback props are defined.
 *
 * @class      ContactCard (name)
 * @param      {Object}  props   The properties
 * @return     {render}  { render a contact card. }
 */
const ContactCard = props => {
  const {
    first_name,
    last_name,
    username,
    description,
    adjective,
  } = props.contact;

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
};

ContactCard.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  adjective: PropTypes.string.isRequired,
};

ContactCard.defaultProps = {
  first_name: 'Not Specified',
  last_name: 'Not Specified',
  username: 'Not Specified',
  description: 'Not Specified',
  adjective: ' Not Specified',
};

export default ContactCard;
