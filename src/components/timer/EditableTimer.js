import React from 'react';
import Timer from './Timer';
import TimerForm from './TimerForm';

class EditableTimer extends React.Component {
  state = {
    editFormOpen: false,
  };

  handleEditClick = () => this.openForm();
  handleFormClose = () => this.closeForm();
  handleSubmit = timer => {
    this.props.onFormSubmit(timer);
    this.closeForm();
  };

  closeForm = () => this.setState({ editFormOpen: false });
  openForm = () => this.setState({ editFormOpen: true });

  render() {
    let toBePassed = {
      id: this.props.id,
      title: this.props.title,
      project: this.props.project,
    };

    if (this.state.editFormOpen) {
      return (
        <TimerForm
          {...toBePassed}
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      toBePassed.elapsed = this.props.elapsed;
      toBePassed.runningSince = this.props.runningSince;

      return (
        <Timer
          {...toBePassed}
          onEditClick={this.handleEditClick}
          onTrashClick={this.props.onTrashClick}
          onStartClick={this.props.onStartClick}
          onStopClick={this.props.onStopClick}
        />
      );
    }
  }
} // EditableTimer

export default EditableTimer;
