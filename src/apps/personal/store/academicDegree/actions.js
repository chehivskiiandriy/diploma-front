import { createAction } from 'redux-actions';

export const SET_ACADEMIC_DEGREES = 'academicDegree/setAll';
export const ADD_ACADEMIC_DEGREE = 'academicDegree/add';
export const UPDATE_ACADEMIC_DEGREE = 'academicDegree/update';
export const REMOVE_ACADEMIC_DEGREE = 'academicDegree/remove';

export const setAcademicDegrees = createAction(SET_ACADEMIC_DEGREES);
export const addAcademicDegree = createAction(ADD_ACADEMIC_DEGREE);
export const updateAcademicDegree = createAction(UPDATE_ACADEMIC_DEGREE);
export const removeAcademicDegree = createAction(REMOVE_ACADEMIC_DEGREE);
