import { createAction } from 'redux-actions';

export const SET_HEAD = 'head/setAll';
export const ADD_HEAD = 'head/add';
export const UPDATE_HEAD = 'head/update';
export const REMOVE_HEAD = 'head/remove';

export const setHeads = createAction(SET_HEAD);
export const addHead = createAction(ADD_HEAD);
export const updateHead = createAction(UPDATE_HEAD);
export const removeHead = createAction(REMOVE_HEAD);
