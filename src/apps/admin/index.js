import React from 'react';
import { Provider } from 'react-redux';

import PageByRoute from './PageByRoute';
import { AdminContext } from './store/context';
import store from './store';

const App = () => (
  <Provider store={store} context={AdminContext}>
    <PageByRoute />
  </Provider>
);

export default App;
