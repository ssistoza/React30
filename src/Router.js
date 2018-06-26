import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Playground from './components/pages/Playground';
import Voting from './components/pages/Voting';
import Timer from './components/pages/Timer';
import Minesweeper from './components/pages/Minesweeper';
import SignupSheet from './components/pages/SignupSheet';

const ROUTES = [
  {
    path: '/',
    component: Playground,
    title: 'Playground',
  },
  {
    path: '/vote',
    component: Voting,
    title: 'Voting',
  },
  {
    path: '/timer',
    component: Timer,
    title: 'Timer',
  },
  {
    path: '/minesweeper',
    component: Minesweeper,
    title: 'Minesweeper',
  },
  {
    path: '/signup',
    component: SignupSheet,
    title: 'Sign Up Sheet',
  },
  {
    path: '/signup',
    component: SignupSheet,
    title: 'Sign Up Sheet',
  },
];

const Router = () => {
  const generateLinks = ROUTES.map(item => {
    if (item.path === '/') {
      return (
        <NavLink
          key={`link-${item.path}`}
          exact
          to={item.path}
          className="item"
          activeClassName="active"
        >
          {item.title}
        </NavLink>
      );
    } else {
      return (
        <NavLink
          key={`link-${item.path}`}
          to={item.path}
          className="item"
          activeClassName="active"
        >
          {item.title}
        </NavLink>
      );
    }
  });

  const generateRoutes = ROUTES.map(item => {
    if (item.path === '/') {
      return (
        <Route
          key={item.path}
          path={item.path}
          component={item.component}
          exact
        />
      );
    } else {
      return (
        <Route key={item.path} path={item.path} component={item.component} />
      );
    }
  });

  return (
    <BrowserRouter>
      <div className="ui grid">
        <div className="three wide column">
          <div className="ui secondary vertical pointing menu fixed">
            {generateLinks}
          </div>
        </div>
        <div className="thirteen wide column">
          <Switch>
            <Route exact path="/" component={Playground} />
            {generateRoutes}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Router;
