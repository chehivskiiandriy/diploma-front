import React, { Suspense, lazy } from 'react';

import LoaderWrapper from '../components/LoaderWrapper';

/**
 * AdminApp
 */
const LazyAdminApp = lazy(
  () => import(/* webpackChunkName: "admin-app" */ './admin'),
);

export function AdminApp() {
  return (
    <Suspense fallback={<LoaderWrapper />}>
      <LazyAdminApp />
    </Suspense>
  );
}

/**
 * AuthApp
 */
const LazyAuthApp = lazy(
  () => import(/* webpackChunkName: "auth-app" */ './auth'),
);

export function AuthApp() {
  return (
    <Suspense fallback={<LoaderWrapper />}>
      <LazyAuthApp />
    </Suspense>
  );
}

/**
 * PersonalApp
 */
const LazyPersonalApp = lazy(
  () => import(/* webpackChunkName: "personal-app" */ './personal'),
);

export function PersonalApp() {
  return (
    <Suspense fallback={<LoaderWrapper />}>
      <LazyPersonalApp />
    </Suspense>
  );
}

/**
 * StudentApp
 */
const LazyStudentApp = lazy(
  () => import(/* webpackChunkName: "student-app" */ './student'),
);

export function StudentApp() {
  return (
    <Suspense fallback={<LoaderWrapper />}>
      <LazyStudentApp />
    </Suspense>
  );
}

/**
 * TeacherApp
 */
const LazyTeacherApp = lazy(
  () => import(/* webpackChunkName: "teacher-app" */ './teacher'),
);

export function TeacherApp() {
  return (
    <Suspense fallback={<LoaderWrapper />}>
      <LazyTeacherApp />
    </Suspense>
  );
}
