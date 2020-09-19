import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainApp from './PageByRoute';

import store from './store';

console.log('[STUDENT] init');

const App = ({ history }) => (
  <Provider store={store}>
    <Router history={history}>
      <MainApp />
    </Router>
  </Provider>
);

App.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default App;
