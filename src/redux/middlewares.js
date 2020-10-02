import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger({ collapsed: true });
const middlewares = [thunkMiddleware];

// eslint-disable-next-line no-undef
if (__DEV__) middlewares.push(logger);

export default middlewares;
