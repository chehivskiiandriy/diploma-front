import React from 'react';
import { Router } from 'react-router';

import history from '../../history';
import PageByRoute from './PageByRoute';

const App = () => (
  <Router history={history}>
    <PageByRoute />
  </Router>
);

export default App;
