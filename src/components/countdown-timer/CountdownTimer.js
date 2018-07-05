import React from 'react';
import CountdownTimerActionButton from './CountdownTimerActionButton';

class CountdownTimer extends React.Component {
  handleStartClick = () => this.props.onStartClick(this.props.id);
  handleStopClick = () => this.props.onStopClick(this.props.id);

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

        <CountdownTimerActionButton
          timerIsRunning={this.props.running}
          onStartClick={this.handleStartClick}
          onStopClick={this.handleStopClick}
        />
      </div>
    );
  }
} // CountdownTimer

export default CountdownTimer;
