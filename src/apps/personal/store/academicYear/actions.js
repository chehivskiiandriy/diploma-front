import { createAction } from 'redux-actions';

export const SET_ACADEMIC_YEARS = 'academicYear/setAll';
export const ADD_ACADEMIC_YEAR = 'academicYear/add';
export const UPDATE_ACADEMIC_YEAR = 'academicYear/update';
export const REMOVE_ACADEMIC_YEAR = 'academicYear/remove';

export const setAcademicYears = createAction(SET_ACADEMIC_YEARS);
export const addAcademicYear = createAction(ADD_ACADEMIC_YEAR);
export const updateAcademicYear = createAction(UPDATE_ACADEMIC_YEAR);
export const removeAcademicYear = createAction(REMOVE_ACADEMIC_YEAR);
