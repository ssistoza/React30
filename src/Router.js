import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Playground from './components/pages/Playground';
import Voting from './components/pages/Voting';
import Timer from './components/pages/Timer';
import Minesweeper from './components/pages/Minesweeper';
import SignupSheet from './components/pages/SignupSheet';
import ContactList from './components/pages/ContactList';
import NewContact from './components/pages/NewContact';

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
    path: '/contacts',
    component: ContactList,
    title: 'Our ʻOhana',
  },
  {
    path: '/contact-form',
    component: NewContact,
    title: 'Become a member',
  },
  {
    path: '/contact-remove',
    component: NewContact,
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
