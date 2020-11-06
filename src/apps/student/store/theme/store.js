import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  themes: [],
  filters: {
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
    [AC.REMOVE_THEME]: (store, { payload }) => ({
      ...store,
      themes: store.themes.filter(el => (el.id !== payload)),
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
