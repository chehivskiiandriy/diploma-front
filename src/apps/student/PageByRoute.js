import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';

import routes from '../../routes';

const MyTheme = lazy(() => import('./containers/MyTheme'));

const PageByRoute = () => (
  <Switch>
    <Suspense fallback={<div>Loading...</div>}>
      <Route exact path={routes.student.myTheme} component={MyTheme} />
    </Suspense>
  </Switch>
);

export default PageByRoute;
