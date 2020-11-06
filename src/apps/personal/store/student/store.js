import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  students: [],
  filters: {
    group: null,
    searchValue: '',
  },
};

export default handleActions(
  {
    [AC.SET_STUDENTS]: (store, { payload }) => ({
      ...store,
      students: payload,
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
    [AC.SET_STUDENT_FILTERS]: (store, { payload }) => ({
      ...store,
      filters: {
        ...store.filters,
        ...payload,
      },
    }),
  },
  initialState,
);
