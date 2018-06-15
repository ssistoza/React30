import React from 'react';
import { client } from '../timer/client';

class Playground extends React.Component {
  render() {
    console.log(client.createTimer());
    return <div>Welcome to React Playground</div>;
  }
} // Playground

export default Playground;
