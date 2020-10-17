import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  departments: [],
};

export default handleActions(
  {
    [AC.SET_DEPARTMENTS]: (store, { payload }) => ({
      ...store,
      departments: payload,
    }),
    [AC.ADD_DEPARTMENT]: (store, { payload }) => ({
      ...store,
      departments: [payload, ...store.departments],
    }),
    [AC.UPDATE_DEPARTMENT]: (store, { payload }) => ({
      ...store,
      departments: store.departments.map(el => (el.id === payload.id ? payload : el)),
    }),
    [AC.REMOVE_DEPARTMENT]: (store, { payload }) => ({
      ...store,
      departments: store.departments.filter(el => (el.id !== payload)),
    }),
  },
  initialState,
);
