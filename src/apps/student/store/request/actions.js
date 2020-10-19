import { createAction } from 'redux-actions';

export const SET_REQUESTS = 'requests/setAll';
export const ADD_REQUEST = 'requests/add';
export const REMOVE_REQUEST = 'requests/remove';

export const setRequests = createAction(SET_REQUESTS);
export const addRequest = createAction(ADD_REQUEST);
export const removeRequest = createAction(REMOVE_REQUEST);
