import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import LoaderWrapper from '../../components/LoaderWrapper';
import routes from '../../routes';
import Logout from '../auth/containers/Logout';

const MyThemes = lazy(() => import('./containers/MyThemes'));
const TeacherLoad = lazy(() => import('./containers/TeacherLoad'));
const Profile = lazy(() => import('../../containers/Profile'));

const PageByRoute = () => (
  <Suspense fallback={<LoaderWrapper />}>
    <Switch>
      <Route exact path={routes.home} component={Profile} />
      <Route exact path={routes.teacher.myThemes} component={MyThemes} />
      <Route exact path={routes.teacher.teacherLoad} component={TeacherLoad} />
      <Route exact path={routes.logout} component={Logout} />
      <Redirect to={routes.home} />
    </Switch>
  </Suspense>

);

export default PageByRoute;
