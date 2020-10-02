import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import LoaderWrapper from '../../components/LoaderWrapper';
import routes from '../../routes';

const MyTheme = lazy(() => import('./containers/MyTheme'));
const Profile = lazy(() => import('../../containers/Profile'));

const PageByRoute = () => (
  <Suspense fallback={<LoaderWrapper />}>
    <Switch>
      <Route exact path={routes.home} component={Profile} />
      <Route exact path={routes.student.myTheme} component={MyTheme} />
      <Redirect to={routes.home} />
    </Switch>
  </Suspense>

);

export default PageByRoute;
