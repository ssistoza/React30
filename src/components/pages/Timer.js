import React from 'react';
import TimersDashboard from '../timer/TimersDashboard';

const Timer = () => (
  <div id="main" class="main ui">
    <h1 class="ui dividing centered header">Timers</h1>
    <div id="content">
      <TimersDashboard />
    </div>
  </div>
);

export default Timer;
