import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  heads: [],
};

export default handleActions(
  {
    [AC.SET_HEAD]: (store, { payload }) => ({
      ...store,
      heads: payload,
    }),
    [AC.ADD_HEAD]: (store, { payload }) => ({
      ...store,
      heads: [payload, ...store.heads],
    }),
    [AC.UPDATE_HEAD]: (store, { payload }) => ({
      ...store,
      heads: store.heads.map(el => (el.id === payload.id ? payload : el)),
    }),
    [AC.REMOVE_HEAD]: (store, { payload }) => ({
      ...store,
      heads: store.heads.filter(el => (el.id !== payload)),
    }),
  },
  initialState,
);
