import { createAction } from 'redux-actions';

export const SET_LABORATORIES = 'laboratory/setAll';
export const ADD_LABORATORY = 'laboratory/add';
export const UPDATE_LABORATORY = 'laboratory/update';
export const REMOVE_LABORATORY = 'laboratory/remove';

export const setLaboratories = createAction(SET_LABORATORIES);
export const addLaboratory = createAction(ADD_LABORATORY);
export const updateLaboratory = createAction(UPDATE_LABORATORY);
export const removeLaboratory = createAction(REMOVE_LABORATORY);
