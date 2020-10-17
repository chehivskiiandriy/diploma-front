import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  students: [],
  pagination: {
    currentPage: 1,
    perPage: 10,
    total: 0,
    lastPage: 0,
  },
};

export default handleActions(
  {
    [AC.SET_STUDENTS]: (store, { payload }) => ({
      ...store,
      students: payload.data,
      pagination: payload.meta,
    }),
    [AC.ADD_STUDENT]: (store, { payload }) => ({
      ...store,
      students: [payload, ...store.students],
    }),
    [AC.UPDATE_STUDENT]: (store, { payload }) => ({
      ...store,
      students: store.students.map(el => (el.id === payload.id ? payload : el)),
    }),
    [AC.REMOVE_STUDENT]: (store, { payload }) => ({
      ...store,
      students: store.students.filter(el => (el.id !== payload)),
    }),
  },
  initialState,
);
