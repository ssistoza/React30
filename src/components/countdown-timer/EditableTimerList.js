import React from 'react';
import EditableTimer from './EditableTimer';

const EditableTimerList = props => {
  const timers = props.timers.map(timer => (
    <EditableTimer key={timer.id} timer={timer} />
  ));

  return <div id="timers">{timers}</div>;
};

export default EditableTimerList;
