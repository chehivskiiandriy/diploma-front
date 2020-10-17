import { handleActions } from 'redux-actions';

import * as AC from './actions';
import { COOKIE_ADMIN_TOKEN_KEY, getTokenSync } from '../../api/token';

const initialState = {
  isAuthorizedAdmin: getTokenSync(COOKIE_ADMIN_TOKEN_KEY, false),
};

export default handleActions(
  {
    [AC.SET_ADMIN_AUTH]: (store, { payload }) => ({
      ...store,
      isAuthorizedAdmin: payload,
    }),
  },
  initialState,
);
