import { createAction } from 'redux-actions';

export const SET_DEGREES = 'degree/setAll';
export const ADD_DEGREE = 'degree/add';
export const UPDATE_DEGREE = 'degree/update';
export const REMOVE_DEGREE = 'degree/remove';

export const setDegrees = createAction(SET_DEGREES);
export const addDegree = createAction(ADD_DEGREE);
export const updateDegree = createAction(UPDATE_DEGREE);
export const removeDegree = createAction(REMOVE_DEGREE);
