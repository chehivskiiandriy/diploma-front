import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import LoaderWrapper from '../../components/LoaderWrapper';
import routes from '../../routes';

const Login = lazy(() => import('./containers/Login'));
const Logout = lazy(() => import('./containers/Logout'));
const ForgotPassword = lazy(() => import('./containers/ForgotPassword'));
const RecoverPassword = lazy(() => import('./containers/RecoverPassword'));

const PageByRoute = () => (
  <Suspense fallback={<LoaderWrapper />}>
    <Switch>
      <Route exact path={routes.login} component={Login} />
      <Route exact path={routes.logout} component={Logout} />
      <Route exact path={routes.forgotPassword} component={ForgotPassword} />
      <Route exact path={routes.recoverPassword} component={RecoverPassword} />
      <Redirect to={routes.login} />
    </Switch>
  </Suspense>
);

export default PageByRoute;
