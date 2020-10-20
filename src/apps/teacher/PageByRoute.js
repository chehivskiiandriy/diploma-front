import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { useSelector } from 'react-redux';

import LoaderWrapper from '../../components/LoaderWrapper';
import routes from '../../routes';
import { isHeadSelector } from '../../store/user/selectors';
import Logout from '../auth/containers/Logout';

const MyThemes = lazy(() => import('./containers/MyThemes'));
const Themes = lazy(() => import('./containers/Themes'));
const Schedule = lazy(() => import('./containers/Schedule'));
const Personal = lazy(() => import('./containers/Personal'));
const TeacherLoad = lazy(() => import('./containers/TeacherLoad'));
const Profile = lazy(() => import('../../containers/Profile'));

const PageByRoute = () => {
  const isHead = useSelector(isHeadSelector);

  return (
    <Suspense fallback={<LoaderWrapper />}>
      <Switch>
        <Route exact path={routes.home} component={Profile} />
        <Route exact path={routes.teacher.myThemes} component={MyThemes} />
        <Route exact path={routes.teacher.schedule} component={Schedule} />
        <Route exact path={routes.teacher.themes} component={Themes} />
        <Route exact path={routes.teacher.teacherLoad} component={TeacherLoad} />
        {isHead && <Route exact path={routes.head.personal} component={Personal} />}
        <Route exact path={routes.logout} component={Logout} />
        <Redirect to={routes.home} />
      </Switch>
    </Suspense>
  );
};

export default PageByRoute;
