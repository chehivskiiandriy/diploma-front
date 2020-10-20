import { handleActions } from 'redux-actions';

import * as AC from './actions';

const initialState = {
  id: null,
  email: '',
  isLoaded: false,
  role: '',
  passwordRecovered: false,
};

export default handleActions(
  {
    [AC.UPDATE_USER]: (store, { payload }) => ({
      ...store, ...payload,
    }),
    [AC.RESET_USER]: (store) => ({
      ...store,
      ...initialState,
      isLoaded: true,
    }),
    [AC.SUCCESS_RECOVER_PASSWORD]: (store) => ({
      ...store,
      passwordRecovered: true,
    }),
    [AC.RESET_PASSWORD]: (store) => ({
      ...store,
      passwordRecovered: false,
    }),
    [AC.VERIFY_USER]: (store, { payload }) => ({
      ...store,
      verifiedUser: payload,
    }),
  },
  initialState,
);
