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
