import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  schedules: [],
};

export default handleActions(
  {
    [AC.SET_SCHEDULES]: (store, { payload }) => ({
      ...store,
      schedules: payload,
    }),
    [AC.ADD_SCHEDULE]: (store, { payload }) => ({
      ...store,
      schedules: [payload, ...store.schedules],
    }),
    [AC.UPDATE_SCHEDULE]: (store, { payload }) => ({
      ...store,
      schedules: store.schedules.map(el => (el.id === payload.id ? payload : el)),
    }),
    [AC.REMOVE_SCHEDULE]: (store, { payload }) => ({
      ...store,
      schedules: store.schedules.filter(el => (el.id !== payload)),
    }),
  },
  initialState,
);
