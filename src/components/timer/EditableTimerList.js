import React from 'react';

const EditableTimerList = props => {
  const timers = props.timers.map(timer => (
    <EditableTimer
      key={timer.id}
      id={timer.id}
      title={timer.title}
      project={timer.project}
      elapsed={timer.elapsed}
      runningSince={timer.runningSince}
      onTrashClick={props.onTrashClick}
      onFormSubmit={props.onFormSubmit}
      onStartClick={props.onStartClick}
      onStopClick={props.onStopClick}
    />
  ));

  return <div id="timers">{timers}</div>;
};

export default EditableTimerList;
