import React from 'react';

class Playground extends React.Component {
  render() {
    return (
      <div className="main ui text container">
        <h1 className="ui dividing centered header">
          Welcome to the Playground
        </h1>
        <div id="content" />
      </div>
    );
  }
} // Playground

export default Playground;
