import { createAction } from 'redux-actions';

export const SET_PERSONAL = 'personal/setAll';
export const ADD_PERSONAL = 'personal/add';
export const UPDATE_PERSONAL = 'personal/update';
export const REMOVE_PERSONAL = 'personal/remove';

export const setPersonals = createAction(SET_PERSONAL);
export const addPersonal = createAction(ADD_PERSONAL);
export const updatePersonal = createAction(UPDATE_PERSONAL);
export const removePersonal = createAction(REMOVE_PERSONAL);
