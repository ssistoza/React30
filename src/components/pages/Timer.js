import React from 'react';
import TimersDashboard from '../timer/TimersDashboard';

const Timer = () => (
  <div id="main" className="main ui">
    <div className="main ui text container"><h1 className="ui dividing centered header">Timers</h1></div>
    <div id="content">
      <TimersDashboard />
    </div>
  </div>
);

export default Timer;
