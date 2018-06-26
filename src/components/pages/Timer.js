import React from 'react';
import TimersDashboard from '../timer/TimersDashboard';

const Timer = () => (
  <div id="main" className="main ui">
    <h1 className="ui dividing centered header">Timers</h1>
    <div id="content">
      <TimersDashboard />
    </div>
  </div>
);

export default Timer;
