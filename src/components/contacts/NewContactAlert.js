import React from 'react';
import PropTypes from 'prop-types';

/**
 * Alerts User if they became apart of the Ohana.
 *
 * - Successfully Inserted.
 * - Not Successful
 *   - Username Taken.
 *   - Full Name Taken. Already aprt of Ohana.
 *
 * @class      NewContactAlert (name)
 */
class NewContactAlert extends React.Component {
  render() {
    const { isAContact, isTaken, isSuccessful, isNotComplete } = this.props;

    if (isAContact) {
      return (
        <div className="ui secondary inverted red segment">
          Not Successful: Already part of Ohana.
        </div>
      );
    }

    if (isTaken) {
      return (
        <div className="ui secondary inverted red segment">
          Not Successful: Username already taken.
        </div>
      );
    }

    // form submitted: not complete.
    if (isNotComplete) {
      return (
        <div className="ui secondary inverted red segment">
          Not Successful: Form not complete.
        </div>
      );
    }

    // form submitted: complete.
    if (isSuccessful) {
      return (
        <div className="ui secondary inverted green segment">
          Successful: You are now part of our Ohana.
        </div>
      );
    }

    // No form submission.
    return null;
  }
} // NewContactAlert

NewContactAlert.propTypes = {
  isAContact: PropTypes.bool,
  isTaken: PropTypes.bool,
  isSuccessful: PropTypes.bool,
};

NewContactAlert.defaultProps = {
  isAContact: false,
  isTaken: false,
  isSuccessful: false,
  isNotComplete: false,
};

export default NewContactAlert;
