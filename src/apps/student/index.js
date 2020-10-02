import React from 'react';
import { Provider } from 'react-redux';
import PageByRoute from './PageByRoute';

import store from './store';

console.log('[STUDENT] init');

const App = () => (
  <Provider store={store}>
    <PageByRoute />
  </Provider>
);

export default App;
