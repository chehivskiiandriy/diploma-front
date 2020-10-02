import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = (reducers, middlewares, initialState = {}) => createStore(
  combineReducers(reducers),
  initialState,
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);

export default store;
