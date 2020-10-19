import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  teacherLoad: [],
};

export default handleActions(
  {
    [AC.SET_TEACHERS_LOAD]: (store, { payload }) => ({
      ...store,
      teacherLoad: payload,
    }),
  },
  initialState,
);
