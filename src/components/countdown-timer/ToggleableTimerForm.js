import React from 'react';
import TimerForm from './TimerForm';

class ToggleableTimerForm extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    if (this.state.isOpen) {
      return <TimerForm />;
    } else {
      return (
        <div className="ui basic content center aligned segment">
          <button className="ui basic button icon">
            <i className="plus icon" />
          </button>
        </div>
      );
    }
  }
} // ToggleableTimerForm

export default ToggleableTimerForm;
