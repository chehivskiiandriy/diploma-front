import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  themes: [],
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
  },
  initialState,
);
