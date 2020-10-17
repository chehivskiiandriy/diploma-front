import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  teacherLoad: [],
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
  },
  initialState,
);
