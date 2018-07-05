import React from 'react';

const CountdownTimerActionButton = props => {
  if (props.timerIsRunning) {
    return (
      <div
        className="ui bottom attached basic red button"
        onClick={props.onStopClick}
      >
        Stop
      </div>
    );
  } else {
    return (
      <div
        className="ui bottom attached basic green button"
        onClick={props.onStartClick}
      >
        Start
      </div>
    );
  }
};

export default CountdownTimerActionButton;
