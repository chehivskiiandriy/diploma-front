import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import LoaderWrapper from '../../components/LoaderWrapper';
import routes from '../../routes';

const Login = lazy(() => import('./containers/Login'));
const Departments = lazy(() => import('./containers/Departments'));

const PageByRoute = () => (
  <Suspense fallback={<LoaderWrapper />}>
    <Switch>
      <Route exact path={routes.admin.login} component={Login} />
      <Route exact path={routes.admin.departments} component={Departments} />
      <Redirect to={routes.admin.login} />
    </Switch>
  </Suspense>

);

export default PageByRoute;
