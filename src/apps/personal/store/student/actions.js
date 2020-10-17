import { createAction } from 'redux-actions';

export const SET_STUDENTS = 'student/setAll';
export const ADD_STUDENT = 'student/add';
export const UPDATE_STUDENT = 'student/update';
export const REMOVE_STUDENT = 'student/remove';

export const setStudents = createAction(SET_STUDENTS);
export const addStudent = createAction(ADD_STUDENT);
export const updateStudent = createAction(UPDATE_STUDENT);
export const removeStudent = createAction(REMOVE_STUDENT);
