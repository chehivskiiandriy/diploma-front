import { createAction } from 'redux-actions';

export const SET_FILES = 'files/setAll';
export const SET_MY_FILES = 'files/setMy';
export const ADD_FILE = 'files/add';
export const REMOVE_FILE = 'files/remove';

export const setFiles = createAction(SET_FILES);
export const setMyFiles = createAction(SET_MY_FILES);
export const addFile = createAction(ADD_FILE);
export const removeFile = createAction(REMOVE_FILE);
