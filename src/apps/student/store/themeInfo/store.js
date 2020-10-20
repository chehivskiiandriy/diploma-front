import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  theme: {},
};

export default handleActions(
  {
    [AC.SET_THEME_INFO]: (store, { payload }) => ({
      ...store,
      theme: payload,
    }),
  },
  initialState,
);
