import React from 'react';
import { helper } from './helper';
import { client } from './client';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

class TimersDashboard extends React.Component {
  state = {
    timers: [],
  };

  componentDidMount() {
    this.loadTimersFromServer();
    setInterval(this.loadTimersFromServer, 5000);
  }

  loadTimersFromServer = () => {
    client.getTimers(serverTimers => {
      this.setState({ timers: serverTimers });
    });
  };

  handleCreateFormSubmit = timer => this.createTimer(timer);
  handleEditFormSubmit = attrs => this.updateTimer(attrs);
  handleTrashClick = timerId => this.deleteTimer(timerId);
  handleStartClick = timerId => this.startTimer(timerId);
  handleStopClick = timerId => this.stopTimer(timerId);

  startTimer = timerId => {
    const now = Date.now();

    const timers = this.state.timers.map(timer => {
      if (timer.id === timerId) {
        return Object.assign({}, timer, { runningSince: now });
      } else {
        return timer;
      }
    });

    this.setState({ timers });
    client.startTimer({ id: timerId, start: now });
  };

  stopTimer = timerId => {
    const now = Date.now();

    const timers = this.state.timers.map(timer => {
      if (timer.id === timerId) {
        const lastElapsed = now - timer.runningSince;
        return Object.assign({}, timer, {
          elapsed: timer.elapsed + lastElapsed,
          runningSince: null,
        });
      } else {
        return timer;
      }
    });

    this.setState({ timers });
    client.stopTimer({ id: timerId, stop: now });
  };

  createTimer = timer => {
    const t = helper.newTimer(timer);
    const timers = this.state.timers.concat(t);
    this.setState({ timers });
    client.createTimer({ t });
  };

  updateTimer = attrs => {
    const timers = this.state.timers.map(timer => {
      if (timer.id === attrs.id) {
        return Object.assign({}, timer, {
          title: attrs.title,
          project: attrs.project,
        });
      } else {
        return timer;
      }
    });

    this.setState({ timers });
    client.updateTimer(attrs);
  };

  deleteTimer = timerId => {
    const timers = this.state.timers.filter(t => t.id !== timerId);
    this.setState({ timers });
    client.deleteTimer({ id: timerId });
  };

  render() {
    return (
      <div className="ui three column centered grid">
        <div className="column">
          <EditableTimerList
            timers={this.state.timers}
            onFormSubmit={this.handleEditFormSubmit}
            onTrashClick={this.handleTrashClick}
            onStartClick={this.handleStartClick}
            onStopClick={this.handleStopClick}
          />

          <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
        </div>
      </div>
    );
  }
} // TimersDashboard

export default TimersDashboard;
