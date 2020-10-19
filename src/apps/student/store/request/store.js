import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  requests: [],
};

export default handleActions(
  {
    [AC.SET_REQUESTS]: (store, { payload }) => ({
      ...store,
      requests: payload,
    }),
    [AC.ADD_REQUEST]: (store, { payload }) => ({
      ...store,
      requests: [payload, ...store.requests],
    }),
    [AC.UPDATE_REQUEST]: (store, { payload }) => ({
      ...store,
      requests: store.requests.map(el => (el.id === payload.id ? payload : el)),
    }),
    [AC.REMOVE_REQUEST]: (store, { payload }) => ({
      ...store,
      requests: store.requests.filter(el => (el.id !== payload)),
    }),
  },
  initialState,
);
