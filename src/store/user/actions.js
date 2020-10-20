import { createAction } from 'redux-actions';

export const UPDATE_USER = 'USER::UPDATE';
export const RESET_USER = 'auth/resetUser';
export const SUCCESS_RECOVER_PASSWORD = 'auth/successRecoverPassword';
export const RESET_PASSWORD = 'auth/resetPassword';
export const VERIFY_USER = 'auth/verify';

export const updateUser = createAction(UPDATE_USER);
export const resetUser = createAction(RESET_USER);
export const successRecoverPassword = createAction(SUCCESS_RECOVER_PASSWORD);
export const resetPassword = createAction(RESET_PASSWORD);
export const setVerifiedUser = createAction(VERIFY_USER);
