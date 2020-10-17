import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import LoaderWrapper from '../../components/LoaderWrapper';
import routes from '../../routes';

const Login = lazy(() => import('./containers/Login'));
const Logout = lazy(() => import('./containers/Logout'));

const PageByRoute = () => (
  <Suspense fallback={<LoaderWrapper />}>
    <Switch>
      <Route exact path={routes.login} component={Login} />
      <Route exact path={routes.logout} component={Logout} />
      <Redirect to={routes.login} />
    </Switch>
  </Suspense>
);

export default PageByRoute;
