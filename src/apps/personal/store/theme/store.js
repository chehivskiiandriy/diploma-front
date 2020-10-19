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
  },
  initialState,
);
