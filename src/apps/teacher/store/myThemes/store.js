import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  themes: [],
  filters: {
    academicYear: null,
    academicDegree: null,
    student: null,
    name: '',
  },
};

export default handleActions(
  {
    [AC.SET_MY_THEMES]: (store, { payload }) => ({
      ...store,
      themes: payload,
    }),
    [AC.ADD_MY_THEME]: (store, { payload }) => ({
      ...store,
      themes: [payload, ...store.themes],
    }),
    [AC.UPDATE_MY_THEME]: (store, { payload }) => ({
      ...store,
      themes: store.themes.map(el => (el.id === payload.id ? payload : el)),
    }),
    [AC.REMOVE_MY_THEME]: (store, { payload }) => ({
      ...store,
      themes: store.themes.filter(el => (el.id !== payload)),
    }),
    [AC.SET_MY_THEMES_FILTERS]: (store, { payload }) => ({
      ...store,
      filters: {
        ...store.filters,
        ...payload,
      },
    }),
  },
  initialState,
);
