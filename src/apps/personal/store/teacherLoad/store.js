import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  teacherLoad: [],
  filters: {
    academicYear: null,
    academicDegree: null,
    teacher: null,
    amount: '',
  },
};

export default handleActions(
  {
    [AC.SET_TEACHERS_LOAD]: (store, { payload }) => ({
      ...store,
      teacherLoad: payload,
    }),
    [AC.ADD_TEACHER_LOAD]: (store, { payload }) => ({
      ...store,
      teacherLoad: [payload, ...store.teacherLoad],
    }),
    [AC.UPDATE_TEACHER_LOAD]: (store, { payload }) => ({
      ...store,
      teacherLoad: store.teacherLoad.map(el => (el.id === payload.id ? payload : el)),
    }),
    [AC.REMOVE_TEACHER_LOAD]: (store, { payload }) => ({
      ...store,
      teacherLoad: store.teacherLoad.filter(el => (el.id !== payload)),
    }),
    [AC.SET_TEACHERS_LOAD_FILTERS]: (store, { payload }) => ({
      ...store,
      filters: {
        ...store.filters,
        ...payload,
      },
    }),
  },
  initialState,
);
