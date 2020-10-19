import { createAction } from 'redux-actions';

export const UPDATE_USER = 'USER::UPDATE';

export const updateUser = createAction(UPDATE_USER);

export const SET_AUTH = 'auth/setAuth';

export const setAuth = createAction(SET_AUTH);

export const SUCCESS_RECOVER_PASSWORD = 'auth/successRecoverPassword';

export const successRecoverPassword = createAction(SUCCESS_RECOVER_PASSWORD);

export const RESET_PASSWORD = 'auth/resetPassword';

export const resetPassword = createAction(RESET_PASSWORD);

export const VERIFY_USER = 'auth/verify';

export const setVerifiedUser = createAction(VERIFY_USER);
