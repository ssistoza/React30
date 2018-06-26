import React from 'react';

class List extends React.Component {
  render() {
    if (this.props.items.length > 0) {
      return (
        <React.Fragment>
          <h2>Signed Up:</h2>
          <ul>
            {this.props.items.map(item => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </React.Fragment>
      );
    }

    return <div>No one has signed up.</div>;
  }
} // List

export default List;
