import React from 'react';
import base from '../../base';
import CountdownTimerDashboard from './CountdownTimerDashboard';

/**
 * CoundownTimerDashboard Container.
 * - Houses the main state of timers.
 *   - Rebase will automatically listen to changes in Firestore.
 *
 * @class      CountdownTimersDashboardContainer (name)
 */
class CountdownTimersDashboardContainer extends React.Component {
  state = {
    timers: [],
  };

  componentDidMount() {
    base.bindCollection('CountdownTimers', {
      context: this,
      state: 'timers',
      withRefs: true,
    });
  }

  render() {
    return (
      <div id="main" className="main ui">
        <div className="ui container">
          <div className="ui text container">
            <h1 className="ui dividing centered header">Timers</h1>
          </div>

          <div id="content">
            <CountdownTimerDashboard timers={this.state.timers} />
          </div>
        </div>
      </div>
    );
  }
} // CountdownTimersDashboardContainer

export default CountdownTimersDashboardContainer;
