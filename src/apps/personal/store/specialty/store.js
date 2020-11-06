import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  specialities: [],
};

export default handleActions(
  {
    [AC.SET_SPECIALTY]: (store, { payload }) => ({
      ...store,
      specialities: payload,
    }),
    [AC.ADD_SPECIALTY]: (store, { payload }) => ({
      ...store,
      specialities: [payload, ...store.specialities],
    }),
    [AC.UPDATE_SPECIALTY]: (store, { payload }) => ({
      ...store,
      specialities: store.specialities.map(el => (el.id === payload.id ? payload : el)),
    }),
    [AC.REMOVE_SPECIALTY]: (store, { payload }) => ({
      ...store,
      specialities: store.specialities.filter(el => (el.id !== payload)),
    }),
  },
  initialState,
);
