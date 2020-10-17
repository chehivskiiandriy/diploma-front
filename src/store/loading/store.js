import { handleActions } from 'redux-actions';
import * as AC from './actions';

const ensureValue = (state, key) => state[key] || 0;

export default handleActions(
  {
    [AC.LOADING_START]: (store, { payload }) => ({
      ...store,
      [payload]: ensureValue(store, payload) + 1,
    }),
    [AC.LOADING_END]: (store, { payload }) => ({
      ...store,
      [payload]: ensureValue(store, payload) - 1,
    }),
  },
  {},
);
