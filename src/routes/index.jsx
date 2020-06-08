import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PrivateRoute } from '../containers';

import LoginRoute from './LoginRoute';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginRoute} />
    </Switch>
  );
};

export default Routes;
