import React from 'react';
import { Provider } from 'react-redux';

import PageByRoute from './PageByRoute';
import { PersonalContext } from './store/context';
import store from './store';

const App = () => (
  <Provider store={store} context={PersonalContext}>
    <PageByRoute />
  </Provider>
);

export default App;
