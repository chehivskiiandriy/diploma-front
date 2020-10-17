import React from 'react';
import { Provider } from 'react-redux';

import PageByRoute from './PageByRoute';
import { TeacherContext } from './store/context';
import store from './store';

const App = () => (
  <Provider store={store} context={TeacherContext}>
    <PageByRoute />
  </Provider>
);

export default App;
