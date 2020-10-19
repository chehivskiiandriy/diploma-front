import React from 'react';
import { Provider } from 'react-redux';
import PageByRoute from './PageByRoute';

import store from './store';
import { StudentContext } from './store/context';

console.log('[STUDENT] init');

const App = () => (
  <Provider store={store} context={StudentContext}>
    <PageByRoute />
  </Provider>
);

export default App;
