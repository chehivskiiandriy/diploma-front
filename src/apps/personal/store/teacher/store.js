import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  teachers: [],
};

export default handleActions(
  {
    [AC.SET_TEACHERS]: (store, { payload }) => ({
      ...store,
      teachers: payload,
    }),
    [AC.ADD_TEACHER]: (store, { payload }) => ({
      ...store,
      teachers: [payload, ...store.teachers],
    }),
    [AC.UPDATE_TEACHER]: (store, { payload }) => ({
      ...store,
      teachers: store.teachers.map(el => (el.id === payload.id ? payload : el)),
    }),
    [AC.REMOVE_TEACHER]: (store, { payload }) => ({
      ...store,
      teachers: store.teachers.filter(el => (el.id !== payload)),
    }),
  },
  initialState,
);
