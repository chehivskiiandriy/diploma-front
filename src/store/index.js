import configStore from '../redux/configStore';
import middlewares from '../redux/middlewares';
import reducers from './reducers';

const store = configStore(
  reducers,
  middlewares,
);

export default store;
