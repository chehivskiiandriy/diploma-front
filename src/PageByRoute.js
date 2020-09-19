import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';

import routes from './routes';

const Profile = lazy(() => import('./containers/Profile'));
const StudentApp = lazy(() => import('./apps/student'));

const PageByRoute = () => (
  <Switch>
    <Suspense fallback={<div>Loading...</div>}>
      <Route exact path={routes.home} component={Profile} />
      <Route exact path={routes.student.myTheme} component={StudentApp} />
    </Suspense>
  </Switch>
);

export default PageByRoute;
