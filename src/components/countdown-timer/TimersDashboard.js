import React from 'react';

import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import base from '../../base';

class TimersDashboard extends React.Component {
  state = {
    timers: [],
  };

  componentDidMount() {
    base.bindCollection('CountdownTimers', {
      context: this,
      state: 'timers',
    });
  }

  handleStartClick = id => {
    const targetTimer = this.state.timers.filter(i => i.id === i);
    setInterval(this.countDown, 1000);
  };

  handleStopClick = () => {};

  countDown = timer => {
    const copy = { ...timer };
  };

  render() {
    return (
      <div className="ui three column centered grid">
        <div className="column">
          <EditableTimerList timers={this.state.timers} />
          <ToggleableTimerForm />
        </div>
      </div>
    );
  }
} // TimersDashboard

export default TimersDashboard;
