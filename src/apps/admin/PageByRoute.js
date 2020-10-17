import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import LoaderWrapper from '../../components/LoaderWrapper';
import routes from '../../routes';

const Departments = lazy(() => import('./containers/Departments'));
const Heads = lazy(() => import('./containers/Heads'));
const Logout = lazy(() => import('./containers/Logout'));

const PageByRoute = () => (
  <Suspense fallback={<LoaderWrapper />}>
    <Switch>
      <Route exact path={routes.admin.departments} component={Departments} />
      <Route exact path={routes.admin.heads} component={Heads} />
      <Route exact path={routes.admin.logout} component={Logout} />
      <Redirect to={routes.admin.departments} />
    </Switch>
  </Suspense>

);

export default PageByRoute;
