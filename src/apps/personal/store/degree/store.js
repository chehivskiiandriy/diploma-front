import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  degrees: [],
};

export default handleActions(
  {
    [AC.SET_DEGREES]: (store, { payload }) => ({
      ...store,
      degrees: payload,
    }),
    [AC.ADD_DEGREE]: (store, { payload }) => ({
      ...store,
      degrees: [payload, ...store.degrees],
    }),
    [AC.UPDATE_DEGREE]: (store, { payload }) => ({
      ...store,
      degrees: store.degrees.map(el => (el.id === payload.id ? payload : el)),
    }),
    [AC.REMOVE_DEGREE]: (store, { payload }) => ({
      ...store,
      degrees: store.degrees.filter(el => (el.id !== payload)),
    }),
  },
  initialState,
);
