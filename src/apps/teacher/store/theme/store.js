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
    [AC.APPROVE_THEME]: (store, { payload }) => ({
      ...store,
      themes: store.themes.map(el => (el.id === payload ? ({ ...el, isConfirmed: true }) : el)),
    }),
    [AC.DECLINE_THEME]: (store, { payload }) => ({
      ...store,
      themes: store.themes.map(el => (el.id === payload ? ({ ...el, isConfirmed: false }) : el)),
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
