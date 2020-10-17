import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import LoaderWrapper from '../../components/LoaderWrapper';
import routes from '../../routes';
import Logout from '../auth/containers/Logout';

const Laboratories = lazy(() => import('./containers/Laboratories'));
const LabDirections = lazy(() => import('./containers/LaboratoriesDirections'));
const Degrees = lazy(() => import('./containers/Degrees'));
const AcademicDegrees = lazy(() => import('./containers/AcademicDegrees'));
const AcademicYears = lazy(() => import('./containers/AcademicYears'));
const Groups = lazy(() => import('./containers/Groups'));
const TeacherLoad = lazy(() => import('./containers/TeacherLoad'));
const Students = lazy(() => import('./containers/Students'));
const Teachers = lazy(() => import('./containers/Teachers'));
const Profile = lazy(() => import('../../containers/Profile'));

const PageByRoute = () => (
  <Suspense fallback={<LoaderWrapper />}>
    <Switch>
      <Route exact path={routes.home} component={Profile} />
      <Route exact path={routes.personal.laboratories} component={Laboratories} />
      <Route exact path={routes.personal.laboratoriesDirections} component={LabDirections} />
      <Route exact path={routes.personal.degrees} component={Degrees} />
      <Route exact path={routes.personal.academicDegrees} component={AcademicDegrees} />
      <Route exact path={routes.personal.academicYears} component={AcademicYears} />
      <Route exact path={routes.personal.groups} component={Groups} />
      <Route exact path={routes.personal.teacherLoad} component={TeacherLoad} />
      <Route exact path={routes.personal.students} component={Students} />
      <Route exact path={routes.personal.teachers} component={Teachers} />
      <Route exact path={routes.logout} component={Logout} />
      <Redirect to={routes.home} />
    </Switch>
  </Suspense>

);

export default PageByRoute;
