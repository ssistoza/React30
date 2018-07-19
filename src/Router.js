import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Playground from './components/playground/Playground';
import Voting from './components/voting/Voting';
import TimersDashboardContainer from './components/timer/TimersDashboardContainer';
import CountdownTimersDashboardContainer from './components/countdown-timer/CountdownTimersDashboardContainer';
import MinesweeperContainer from './components/minesweeper/MinesweeperContainer';
import SignupContainer from './components/signup-sheet/SignupContainer';
import ContactFormContainer from './components/contacts/ContactFormContainer';
import ContactListContainer from './components/contacts/ContactListContainer';

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
    component: TimersDashboardContainer,
    title: 'Timetracker',
  },
  {
    path: '/countdown-timer',
    component: CountdownTimersDashboardContainer,
    title: 'Countdown Timer',
  },
  {
    path: '/minesweeper',
    component: MinesweeperContainer,
    title: 'Minesweeper',
  },
  {
    path: '/signup',
    component: SignupContainer,
    title: 'Sign Up Sheet',
  },
  {
    path: '/contacts',
    component: ContactListContainer,
    title: 'The Ohana',
  },
  {
    path: '/contact-form',
    component: ContactFormContainer,
    title: 'Become a member',
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
        <div className="two wide column">
          <div className="ui secondary vertical pointing menu">
            {generateLinks}
          </div>
        </div>
        <div className="fourteen wide column">
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
