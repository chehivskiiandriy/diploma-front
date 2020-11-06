import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  themes: [],
  filters: {
    academicYear: null,
    academicDegree: null,
    student: null,
    teacher: null,
    name: '',
  },
};

export default handleActions(
  {
    [AC.SET_THEMES]: (store, { payload }) => ({
      ...store,
      themes: payload,
    }),
    [AC.SET_THEMES_FILTERS]: (store, { payload }) => ({
      ...store,
      filters: {
        ...store.filters,
        ...payload,
      },
    }),
  },
  initialState,
);
