import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  schedules: [],
};

export default handleActions(
  {
    [AC.SET_SCHEDULES]: (store, { payload }) => ({
      ...store,
      schedules: payload,
    }),
  },
  initialState,
);
