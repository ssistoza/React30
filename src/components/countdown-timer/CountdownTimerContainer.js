import React from 'react';
import base from '../../base';
import CountdownTimer from './CountdownTimer';

/**
 * Container for CountdownTimer.
 * - Allows two way sync between Firestore and State.
 *
 * @class      CountdownTimerContainer (name)
 */
class CountdownTimerContainer extends React.Component {
  state = {
    timer: [],
  };

  componentWillMount() {
    base.syncDoc(`CountdownTimers/${this.props.doc}`, {
      context: this,
      state: 'timer',
    });
  }

  render() {
    return <CountdownTimer {...this.state.timer} />;
  }
} // CountdownTimerContainer

export default CountdownTimerContainer;
