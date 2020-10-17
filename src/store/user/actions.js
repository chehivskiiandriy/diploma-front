import { createAction } from 'redux-actions';

export const UPDATE_USER = 'USER::UPDATE';

export const updateUser = createAction(UPDATE_USER);

export const SET_AUTH = 'auth/setAuth';

export const setAuth = createAction(SET_AUTH);
