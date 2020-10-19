import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  personals: [],
};

export default handleActions(
  {
    [AC.SET_PERSONAL]: (store, { payload }) => ({
      ...store,
      personals: payload,
    }),
    [AC.ADD_PERSONAL]: (store, { payload }) => ({
      ...store,
      personals: [payload, ...store.personals],
    }),
    [AC.UPDATE_PERSONAL]: (store, { payload }) => ({
      ...store,
      personals: store.personals.map(el => (el.id === payload.id ? payload : el)),
    }),
    [AC.REMOVE_PERSONAL]: (store, { payload }) => ({
      ...store,
      personals: store.personals.filter(el => (el.id !== payload)),
    }),
  },
  initialState,
);
