import { createAction } from 'redux-actions';

export const SET_SPECIALTY = 'specialty/setAll';
export const ADD_SPECIALTY = 'specialty/add';
export const UPDATE_SPECIALTY = 'specialty/update';
export const REMOVE_SPECIALTY = 'specialty/remove';

export const setSpecialty = createAction(SET_SPECIALTY);
export const addSpecialty = createAction(ADD_SPECIALTY);
export const updateSpecialty = createAction(UPDATE_SPECIALTY);
export const removeSpecialty = createAction(REMOVE_SPECIALTY);
