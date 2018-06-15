import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Playground from './components/pages/Playground';
import Voting from './components/pages/Voting';
import Timer from './components/pages/Timer';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Playground} />
      <Route path="/vote" component={Voting} />
      <Route path="/timer" component={Timer} />
    </Switch>
  </BrowserRouter>
);

export default Router;
