import React from 'react';
import TimersDashboard from '../countdown-timer/TimersDashboard';

class CountdownTimer extends React.Component {
  render() {
    return (
      <div id="main" className="main ui">
        <div className="ui container">
          <div className="ui text container">
            <h1 className="ui dividing centered header">Timers</h1>
          </div>

          <div id="content">
            <TimersDashboard />
          </div>
        </div>
      </div>
    );
  }
} // CountdownTimer

export default CountdownTimer;
