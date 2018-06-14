import React from 'react';

class TimerForm extends React.Component {
  state = {
    title: this.props.title || '',
    project: this.props.project || '',
  };

  handleTitleChange = e => this.setState({ title: e.target.value });
  handleProjectChange = e => this.setState({ project: e.target.value });
  handleSubmit = () => {
    this.props.onFormSubmit({
      id: this.props.id,
      title: this.state.title,
      project: this.state.project,
    });
  };

  render() {
    const submitText = this.props.id ? 'Update' : 'Create';

    return (
      <div className="ui cetered card">
        <div className="content">
          <div className="ui form">
            <div className="field">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                defaultValue={this.state.title}
                onChange={this.handleTitleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="project">Project</label>
              <input
                type="text"
                defaultValue={this.state.project}
                onChange={this.handleProjectChange}
              />
            </div>
            <div className="ui two bottom attached buttons">
              <button
                className="ui basic blue button"
                onClick={this.handleSubmit}
              >
                {submitText}
              </button>
              <button
                className="ui basic blue button"
                onClick={this.props.onFormClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
} // TimerForm

export default TimerForm;