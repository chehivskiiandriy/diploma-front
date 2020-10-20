import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import LoaderWrapper from '../../components/LoaderWrapper';
import routes from '../../routes';
import Logout from '../auth/containers/Logout';

const Themes = lazy(() => import('./containers/Themes'));
const Requests = lazy(() => import('./containers/Requests'));
const MyTheme = lazy(() => import('./containers/MyTheme'));
const Schedule = lazy(() => import('./containers/Schedule'));
const TeacherLoad = lazy(() => import('./containers/TeacherLoad'));
const Profile = lazy(() => import('../../containers/Profile'));

const PageByRoute = () => (
  <Suspense fallback={<LoaderWrapper />}>
    <Switch>
      <Route exact path={routes.home} component={Profile} />
      <Route exact path={routes.student.themes} component={Themes} />
      <Route exact path={routes.student.requests} component={Requests} />
      <Route exact path={routes.student.myTheme} component={MyTheme} />
      <Route exact path={routes.student.schedule} component={Schedule} />
      <Route exact path={routes.student.teacherLoad} component={TeacherLoad} />
      <Route exact path={routes.logout} component={Logout} />
      <Redirect to={routes.home} />
    </Switch>
  </Suspense>

);

export default PageByRoute;
