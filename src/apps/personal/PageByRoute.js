import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import LoaderWrapper from '../../components/LoaderWrapper';
import routes from '../../routes';

const Groups = lazy(() => import('./containers/Groups'));
const Students = lazy(() => import('./containers/Students'));
const Profile = lazy(() => import('../../containers/Profile'));

const PageByRoute = () => (
  <Suspense fallback={<LoaderWrapper />}>
    <Switch>
      <Route exact path={routes.home} component={Profile} />
      <Route exact path={routes.personal.groups} component={Groups} />
      <Route exact path={routes.personal.students} component={Students} />
      <Redirect to={routes.home} />
    </Switch>
  </Suspense>

);

export default PageByRoute;
