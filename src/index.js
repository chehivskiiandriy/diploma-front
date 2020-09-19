import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import history from './history';
import store from './store';
import MainApp from './MainApp';

import '../styles/main.scss';

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <MainApp />
    </Router>
  </Provider>
);

export default App;
