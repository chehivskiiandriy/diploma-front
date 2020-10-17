import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  id: null,
  email: '',
  isLoaded: false,
  role: '',
};

export default handleActions(
  {
    [AC.UPDATE_USER]: (store, { payload }) => ({
      ...store, ...payload,
    }),
    [AC.SET_AUTH]: (store, { payload }) => ({
      ...store,
      isAuthorized: payload,
    }),
  },
  initialState,
);
