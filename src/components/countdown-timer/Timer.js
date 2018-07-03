import React from 'react';
import { helper } from './helper';
import TimerActionButton from './TimerActionButton';

class Timer extends React.Component {
  render() {
    return (
      <div className="ui centered card">
        <div className="content">
          <div className="header">{this.props.task}</div>
          <div className="meta">{this.props.category}</div>
          <div className="center aligned description">
            <h2>{this.props.counter}</h2>
          </div>

          <div className="extra content">
            <span className="right floated edit icon">
              <i className="edit icon" />
            </span>
            <span className="right floated trash icon">
              <i className="trash icon" />
            </span>
          </div>
        </div>
        <TimerActionButton />
      </div>
    );
  }
}

export default Timer;
