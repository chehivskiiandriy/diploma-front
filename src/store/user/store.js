import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  id: null,
  email: '',
  isLoaded: false,
  main: true,
  role: 'teacher',
};

export default handleActions(
  {
    [AC.UPDATE_USER]: (store, { payload }) => ({
      ...store, ...payload,
    }),
  },
  initialState,
);
