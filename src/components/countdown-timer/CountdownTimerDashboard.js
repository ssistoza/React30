import React from 'react';
import CountdownTimerList from './CountdownTimerList';

class CountdownTimerDashboard extends React.Component {
  render() {
    return (
      <div className="ui three column centered grid">
        <div className="column">
          <CountdownTimerList timers={this.props.timers} />

          {/*<ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />*/}
        </div>
      </div>
    );
  }
} // CountdownTimerDashboard

export default CountdownTimerDashboard;
