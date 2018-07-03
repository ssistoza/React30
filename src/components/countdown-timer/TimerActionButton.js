import React from 'react';

const TimerActionButton = props => {
  if (props.timerIsRunning) {
    return <div className="ui bottom attached basic red button">Stop</div>;
  } else {
    return <div className="ui bottom attached basic green button">Start</div>;
  }
};

export default TimerActionButton;
