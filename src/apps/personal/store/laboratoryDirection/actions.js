import { createAction } from 'redux-actions';

export const SET_LABORATORIES_DIRECTIONS = 'laboratoryDirection/setAll';
export const ADD_LABORATORY_DIRECTION = 'laboratoryDirection/add';
export const UPDATE_LABORATORY_DIRECTION = 'laboratoryDirection/update';
export const REMOVE_LABORATORY_DIRECTION = 'laboratoryDirection/remove';

export const setLaboratoriesDirections = createAction(SET_LABORATORIES_DIRECTIONS);
export const addLaboratoryDirection = createAction(ADD_LABORATORY_DIRECTION);
export const updateLaboratoryDirection = createAction(UPDATE_LABORATORY_DIRECTION);
export const removeLaboratoryDirection = createAction(REMOVE_LABORATORY_DIRECTION);
