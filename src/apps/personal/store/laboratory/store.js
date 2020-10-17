import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  laboratories: [],
};

export default handleActions(
  {
    [AC.SET_LABORATORIES]: (store, { payload }) => ({
      ...store,
      laboratories: payload,
    }),
    [AC.ADD_LABORATORY]: (store, { payload }) => ({
      ...store,
      laboratories: [payload, ...store.laboratories],
    }),
    [AC.UPDATE_LABORATORY]: (store, { payload }) => ({
      ...store,
      laboratories: store.laboratories.map(el => (el.id === payload.id ? payload : el)),
    }),
    [AC.REMOVE_LABORATORY]: (store, { payload }) => ({
      ...store,
      laboratories: store.laboratories.filter(el => (el.id !== payload)),
    }),
  },
  initialState,
);
