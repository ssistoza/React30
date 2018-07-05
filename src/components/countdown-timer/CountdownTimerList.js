import React from 'react';
import base from '../../base';
import CountdownTimerContainer from './CountdownTimerContainer';

class CountdownTimerList extends React.Component {
  render() {
    const countdownTimer = this.props.timers.map(i => {
      return <CountdownTimerContainer key={i.id} doc={i.ref.id} />;
    });

    return <div id="timers">{countdownTimer}</div>;
  }
} // CountdownTimerList

export default CountdownTimerList;
