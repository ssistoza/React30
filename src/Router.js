import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Voting from './components/pages/Voting';

const Router = () => (
  <BrowserRouter>
    <Route exact path="/" component={Voting} />
  </BrowserRouter>
);

export default Router;
