import React from 'react';
import Timer from './Timer';
import TimerForm from './TimerForm';

class EditableTimer extends React.Component {
  state = {
    editFormOpen: false,
  };

  render() {
    if (this.state.editFormOpen) {
      return <TimerForm />;
    } else {
      return <Timer {...this.props.timer} />;
    }
  }
} // EditableTimer

export default EditableTimer;
